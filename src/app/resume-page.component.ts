import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="page-container">
        <div class="section-heading section-heading-tight">
          <h2>Resume</h2>
        </div>

        <div class="resume-layout resume-layout-single">
          <div class="resume-paper" aria-label="Resume preview">
            <div class="resume-topline">
              <div>
                <h3>Ryan Brooks</h3>
                <p>M.S. Computer Science Student</p>
              </div>
              <p class="resume-contact">resume.pdf</p>
            </div>

            <iframe
              class="resume-frame"
              src="/resume.pdf"
              title="Ryan Brooks resume PDF preview"
            ></iframe>
          </div>

          <aside class="resume-note">
            <p>View the full resume in-browser or download a copy directly.</p>

            <div class="resume-actions">
              <a class="button button-primary" href="/resume.pdf" target="_blank" rel="noopener">
                Open PDF
              </a>
              <a class="button button-dark" href="/resume.pdf" download>
                Download PDF
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `,
})
export class ResumePageComponent {}
