import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { socialLinks } from './app.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  protected readonly currentYear = new Date().getFullYear();
  protected currentPath = '/';
  protected currentHomeSection: 'home' | 'projects' = 'home';

  protected readonly navItems = [
    { label: 'Home', route: '/', fragment: undefined },
    { label: 'Projects', route: '/', fragment: 'projects' },
    { label: 'Resume', route: '/resume', fragment: undefined },
    { label: 'About', route: '/about', fragment: undefined },
    { label: 'Contact', route: '/contact', fragment: undefined },
  ];

  protected readonly socialLinks = socialLinks;

  ngOnInit(): void {
    this.syncRouteState();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.syncRouteState();
        setTimeout(() => this.updateHomeSection(), 0);
      }
    });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateHomeSection();
  }

  protected isNavItemActive(item: { label: string; route: string; fragment?: string }): boolean {
    if (item.label === 'Home') {
      return this.currentPath === '/' && this.currentHomeSection === 'home';
    }

    if (item.label === 'Projects') {
      return this.currentPath === '/' && this.currentHomeSection === 'projects';
    }

    return this.currentPath === item.route;
  }

  private syncRouteState(): void {
    const url = this.router.url.split('#')[0] || '/';
    this.currentPath = url;
    this.updateHomeSection();
  }

  private updateHomeSection(): void {
    if (this.currentPath !== '/') {
      return;
    }

    const projectsSection = this.document.getElementById('projects');
    if (!projectsSection) {
      this.currentHomeSection = 'home';
      return;
    }

    const activationLine = 180;
    const top = projectsSection.getBoundingClientRect().top;
    this.currentHomeSection = top <= activationLine ? 'projects' : 'home';
  }
}
