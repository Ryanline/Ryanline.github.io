import { Component } from '@angular/core';

type Project = {
  title: string;
  image: string;
  summary: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: {
    name: string;
    logo: string;
  }[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Ryanline' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanline/' },
    { label: 'Email', href: 'mailto:brooksryan63@gmail.com' },
  ];

  protected readonly projects: Project[] = [
    {
      title: 'Digraph Algorithm Comparison',
      image: 'images/project2.png',
      summary:
        "Compares A*, Hybrid A*/Reverse A*, and minimax strategies across directed graph search problems.",
      githubUrl: 'https://github.com/Ryanline/minimax-a-star-algorithm-implementation',
      technologies: [{ name: 'Python', logo: 'images/logos/python-logo.png' }],
    },
    {
      title: 'AVL Tree IP Address Book',
      image: 'images/project5.png',
      summary:
        'Implements an AVL-backed IPv4 address book in C with validation, balancing, and efficient lookup operations.',
      githubUrl: 'https://github.com/Ryanline/avl-tree-ip-address-book',
      technologies: [{ name: 'GitHub', logo: 'images/logos/github-logo.png' }],
    },
    {
      title: 'Whimble Platformer Demo',
      image: 'images/project6.png',
      summary:
        'A pixel-art 2D platformer prototype with movement systems, enemy behaviors, and multiplayer collision ideas.',
      githubUrl: 'https://github.com/Ryanline/Whimble-Repo',
      technologies: [
        { name: 'React', logo: 'images/logos/react-logo.png' },
        { name: 'TypeScript', logo: 'images/logos/typescript-logo.png' },
        { name: 'Node.js', logo: 'images/logos/nodejs-logo.png' },
        { name: 'PostgreSQL', logo: 'images/logos/postgresql-logo.png' },
        { name: 'Docker', logo: 'images/logos/docker-logo.png' },
        { name: 'Cloudflare', logo: 'images/logos/cloudflare-logo.png' },
      ],
    },
    {
      title: 'Dungeons And Druddigons',
      image: 'images/project1.png',
      summary:
        'Live web app for a Pokemon-themed D&D 5e homebrew with rules, moves, abilities, and companion tools.',
      githubUrl: 'https://github.com/Ryanline',
      technologies: [
        { name: 'Google Sheets', logo: 'images/logos/googlesheets-logo.png' },
        { name: 'JavaScript', logo: 'images/logos/javascript-logo.webp' },
        { name: 'Vite', logo: 'images/logos/vite-logo.png' },
        { name: 'GitHub Actions', logo: 'images/logos/githubactions-logo.png' },
        { name: 'GitHub Pages', logo: 'images/logos/github-logo.png' },
      ],
    },
  ];

  protected readonly resumeHighlights = {
    education: [
      'M.S. Computer Science, George Mason University',
      'Computing Foundations Graduate Certificate, George Mason University',
    ],
    skills: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'React',
      'Node.js',
      'Python',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
      'AWS',
    ],
    experience: [
      'Building full-stack coursework and personal projects with a focus on maintainable architecture.',
      'Exploring algorithms, systems, and scalable web application patterns through graduate study.',
    ],
  };
}
