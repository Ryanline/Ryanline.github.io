import { Component } from '@angular/core';
import { projects } from './app.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-copy">
        <h1>Ryan Brooks</h1>
        <p class="hero-subtitle">Full-Stack Software Developer</p>
        <p class="hero-detail">M.S. Computer Science</p>

        <div class="hero-actions">
          <a class="button button-primary" href="#projects">View Projects</a>
          <a class="button button-secondary" href="/resume">Resume</a>
        </div>
      </div>
    </section>

    <section class="content-section projects-section" id="projects">
      <div class="section-heading">
        <h2>Projects</h2>
      </div>

      <div class="project-grid">
        @for (project of projectList; track project.title) {
          <article class="project-card">
            <div class="project-image" aria-hidden="true"></div>

            <div class="project-body">
              <h3>{{ project.title }}</h3>
              <p>{{ project.summary }}</p>

              <div class="project-actions">
                @if (project.liveUrl) {
                  <a class="button button-soft" [href]="project.liveUrl" target="_blank" rel="noopener">
                    <img class="button-icon" src="images/logos/web-logo.png" alt="" aria-hidden="true" />
                    <span>Live Site</span>
                  </a>
                }

                <a class="button button-dark" [href]="project.githubUrl" target="_blank" rel="noopener">
                  <img
                    class="button-icon button-icon-invert"
                    src="images/logos/github-logo.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <span>GitHub</span>
                </a>
              </div>

              <ul class="tech-list" aria-label="Technologies used">
                @for (technology of project.technologies; track technology.name) {
                  <li>
                    <img [src]="technology.logo" [alt]="technology.name" [title]="technology.name" />
                    <span>{{ technology.name }}</span>
                  </li>
                }
              </ul>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class HomePageComponent {
  protected readonly projectList = projects;
}
