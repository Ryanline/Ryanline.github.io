export type Technology = {
  name: string;
  logo: string;
};

export type Project = {
  title: string;
  summary: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: Technology[];
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Ryanline' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanline/' },
  { label: 'Email', href: 'mailto:brooksryan63@gmail.com' },
];

export const projects: Project[] = [
  {
    title: 'Rush: Speed Dating',
    summary:
      'Fully deployed live speed dating full-stack application that pairs users into timed chatrooms.',
    githubUrl: 'https://github.com/Ryanline/rush',
    liveUrl: 'https://rush-app-ava.pages.dev/',
    technologies: [
      { name: 'React', logo: 'images/logos/react-logo.png' },
      { name: 'TypeScript', logo: 'images/logos/typescript-logo.png' },
      { name: 'Node.js', logo: 'images/logos/nodejs-logo.png' },
      { name: 'PostgreSQL', logo: 'images/logos/postgresql-logo.png' },
      { name: 'Cloudflare Pages', logo: 'images/logos/cloudflare-logo.png' },
      { name: 'Docker', logo: 'images/logos/docker-logo.png' },
      { name: 'k3s', logo: 'images/logos/k3s-logo.png' },
      { name: 'Amazon EC2', logo: 'images/logos/amazonec2-logo.png' },
      { name: 'WebSockets', logo: 'images/logos/websockets-logo.svg' },
      { name: 'Vite', logo: 'images/logos/vite-logo.png' },
    ],
  },
  {
    title: 'Bayesian Net CSP',
    summary:
      'Implements AC-3 algorithm and a Bayesian Network to solve a map-coloring constraint satisfaction problem.',
    githubUrl: 'https://github.com/Ryanline/bayesian-network-constraint-satisfaction-problem',
    technologies: [{ name: 'Python', logo: 'images/logos/python-logo.png' }],
  },
  {
    title: 'Digraph Algorithm Comparison',
    summary:
      "Compares A*, Hybrid A*/Reverse A*, and Minimax algorithms' digraph search performances.",
    githubUrl: 'https://github.com/Ryanline/minimax-a-star-algorithm-implementation',
    technologies: [{ name: 'Python', logo: 'images/logos/python-logo.png' }],
  },
  {
    title: 'RyanBrooks.io',
    summary: 'Personal portfolio site built with Angular and deployed on GitHub Pages.',
    githubUrl: 'https://github.com/Ryanline/Ryanline.github.io',
    liveUrl: 'https://ryanbrooks.io/',
    technologies: [
      { name: 'Angular', logo: 'images/logos/angular-logo.png' },
      { name: 'GitHub Pages', logo: 'images/logos/github-logo.png' },
      { name: 'GitHub Actions', logo: 'images/logos/githubactions-logo.png' },
    ],
  },
  {
    title: 'Dungeons and Druddigons',
    summary:
      'Live web app for a Pokemon-themed D&D 5e homebrew. Shows rules, moves, abilities, and more.',
    githubUrl: 'https://github.com/Ryanline/Dungeons-and-Druddigons',
    liveUrl: 'https://ryanbrooks.io/Dungeons-and-Druddigons/',
    technologies: [
      { name: 'React', logo: 'images/logos/react-logo.png' },
      { name: 'Vite', logo: 'images/logos/vite-logo.png' },
      { name: 'Google Sheets', logo: 'images/logos/googlesheets-logo.png' },
      { name: 'GitHub Actions', logo: 'images/logos/githubactions-logo.png' },
      { name: 'GitHub Pages', logo: 'images/logos/github-logo.png' },
      { name: 'JavaScript', logo: 'images/logos/javascript-logo.webp' },
    ],
  },
  {
    title: 'AVL Tree Address Book Engine',
    summary: 'Implements an IPv4 address book in C using an AVL tree.',
    githubUrl: 'https://github.com/Ryanline/avl-tree-ip-address-book',
    technologies: [{ name: 'C', logo: 'images/logos/c-logo.png' }],
  },
  {
    title: 'BoundedQueue Bug Testing',
    summary: 'Implements repOk() rep invariant with JUnit 4 testing for BoundedQueue.',
    githubUrl: 'https://github.com/Ryanline/junit-boundedqueue-testing',
    technologies: [
      { name: 'Java', logo: 'images/logos/java-logo.png' },
      { name: 'JUnit', logo: 'images/logos/junit-logo.svg' },
    ],
  },
  {
    title: 'MATLAB Calculus Tool',
    summary: 'A simple calculus tool for finding derivatives and integrals.',
    githubUrl: 'https://github.com/Ryanline/calculus-tool',
    technologies: [
      { name: 'MATLAB', logo: 'images/logos/matlab-logo.png' },
      { name: 'JavaScript', logo: 'images/logos/javascript-logo.webp' },
      { name: 'React', logo: 'images/logos/react-logo.png' },
      { name: 'Vite', logo: 'images/logos/vite-logo.png' },
      { name: 'CSS', logo: 'images/logos/css-logo.svg' },
    ],
  },
  {
    title: 'SMPCache Research',
    summary:
      'Analyzes cache memory performance across various simulated symmetric multiprocessor cache system configurations.',
    githubUrl: 'https://github.com/Ryanline/smpcache-research',
    technologies: [{ name: 'SMPCache', logo: 'images/logos/smpcache-logo.png' }],
  },
];
