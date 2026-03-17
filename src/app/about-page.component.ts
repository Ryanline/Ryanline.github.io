import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="page-container prose-panel">
        <div class="section-heading section-heading-tight">
          <h2>About</h2>
        </div>

        <div class="prose-card">
          <p>
            I am a full-stack software developer and M.S. Computer Science student at George Mason
            University. I enjoy building software that is practical, dependable, and thoughtfully
            designed, whether that means a polished web application, a well-structured API, or a
            project rooted in algorithms and systems fundamentals.
          </p>
          <p>
            A lot of my work sits at the intersection of product-minded engineering and computer
            science problem solving. On one side, I like building user-facing applications such as
            Rush and Dungeons and Druddigons, where the challenge is creating an experience that
            feels smooth, intuitive, and production-ready. On the other, I enjoy lower-level and
            academic projects like graph search comparisons, constraint satisfaction, cache
            simulation, and data-structure implementations that sharpen the way I think about
            performance, correctness, and maintainability.
          </p>
          <p>
            I am especially interested in backend and API design, real-time systems, authentication,
            relational databases, and the kind of architecture decisions that help software stay
            clear and scalable as it grows. No matter the project, I care about writing code that is
            organized, readable, and built with the long term in mind.
          </p>
          <p>
            Outside of the technical details, I like projects that give me room to learn deeply and
            ship something real. This site is a small example of that approach: a place to share the
            work I am proud of, the tools I use, and the direction I am continuing to grow in as an
            engineer.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutPageComponent {}
