import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  template: `
    <section class="page-section page-section-plain">
      <div class="resume-page-shell">
        <div class="section-heading section-heading-tight resume-heading">
          <h2>Resume</h2>
        </div>

        <p class="resume-download-line">
          <a href="/resume.pdf" download>Download resume.pdf</a>
          <span> ({{ resumeSizeLabel }})</span>
        </p>

        <iframe
          class="resume-frame"
          src="/resume.pdf"
          title="Ryan Brooks resume PDF preview"
        ></iframe>
      </div>
    </section>
  `,
})
export class ResumePageComponent {
  protected readonly resumeSizeLabel = '83.4 KB';
}
