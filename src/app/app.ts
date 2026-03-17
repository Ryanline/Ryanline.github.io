import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { socialLinks } from './app.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly navItems = [
    { label: 'Home', route: '/', fragment: undefined },
    { label: 'Projects', route: '/', fragment: 'projects' },
    { label: 'Resume', route: '/resume', fragment: undefined },
    { label: 'About', route: '/about', fragment: undefined },
    { label: 'Contact', route: '/contact', fragment: undefined },
  ];

  protected readonly socialLinks = socialLinks;
}
