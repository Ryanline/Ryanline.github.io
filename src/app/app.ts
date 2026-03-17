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
  private pendingScrollTarget: 'projects' | null = null;

  protected readonly currentYear = new Date().getFullYear();
  protected currentPath = '/';
  protected currentHomeSection: 'home' | 'projects' = 'home';
  protected mobileMenuOpen = false;

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
        this.mobileMenuOpen = false;

        if (this.pendingScrollTarget === 'projects' && this.currentPath === '/') {
          setTimeout(() => {
            this.scrollToProjects();
            this.pendingScrollTarget = null;
          }, 0);
        }

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

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  protected handleNavClick(
    event: MouseEvent,
    item: { label: string; route: string; fragment?: string },
  ): void {
    this.mobileMenuOpen = false;

    if (item.label === 'Home' && this.currentPath === '/') {
      event.preventDefault();
      this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
      this.currentHomeSection = 'home';
      return;
    }

    if (item.fragment !== 'projects') {
      return;
    }

    event.preventDefault();

    if (this.currentPath === '/') {
      this.scrollToProjects();
      return;
    }

    this.pendingScrollTarget = 'projects';
    void this.router.navigateByUrl('/');
  }

  private syncRouteState(): void {
    const url = this.router.url.split('#')[0] || '/';
    this.currentPath = url;
    this.updateHomeSection();
  }

  private scrollToProjects(): void {
    const projectsSection = this.document.getElementById('projects');
    if (!projectsSection) {
      return;
    }

    const activationLine = 180;
    const scrollTop = this.document.defaultView?.scrollY ?? 0;
    const targetTop = scrollTop + projectsSection.getBoundingClientRect().top - activationLine;

    this.document.defaultView?.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    });

    this.currentHomeSection = 'projects';
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
