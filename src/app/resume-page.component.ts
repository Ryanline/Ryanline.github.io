import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="resume-page-shell">
        <div class="section-heading section-heading-tight resume-heading">
          <h2>Resume</h2>
        </div>

        <p class="resume-download-line">
          <a href="/resume.pdf" download>Download resume.pdf</a>
          <span>({{ resumeSizeLabel }})</span>
        </p>

        <div class="resume-viewer" aria-label="Resume preview">
          <div class="resume-toolbar" aria-hidden="true">
            <div class="resume-toolbar-group">
              <span class="resume-toolbar-label">Page</span>
              <button class="resume-toolbar-button" type="button">&lsaquo;</button>
              <div class="resume-toolbar-pagebox">1</div>
              <button class="resume-toolbar-button" type="button">&rsaquo;</button>
              <span class="resume-toolbar-label">of 1</span>
            </div>

            <div class="resume-toolbar-group">
              <button class="resume-toolbar-button" type="button">&#8635;</button>
              <span class="resume-toolbar-separator"></span>
              <button class="resume-toolbar-button" type="button">&minus;</button>
              <span class="resume-toolbar-label resume-toolbar-zoom">ZOOM</span>
              <button class="resume-toolbar-button" type="button">+</button>
              <span class="resume-toolbar-separator"></span>
              <a class="resume-toolbar-button resume-toolbar-link" href="/resume.pdf" target="_blank" rel="noopener">
                &#8599;
              </a>
            </div>
          </div>

          <div class="resume-document-shell">
            <iframe
              class="resume-frame"
              src="/resume.pdf"
              title="Ryan Brooks resume PDF preview"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ResumePageComponent {
  protected readonly resumeSizeLabel = '83.4 KB';
}
