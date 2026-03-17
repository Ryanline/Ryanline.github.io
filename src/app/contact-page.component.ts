import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="page-section">
      <div class="page-container contact-layout">
        <div class="section-heading section-heading-tight">
          <h2>Contact</h2>
        </div>

        <div class="contact-card">
          <form class="contact-form" (ngSubmit)="openMailto()" #contactForm="ngForm">
            <label>
              Name
              <input type="text" name="name" [(ngModel)]="form.name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" [(ngModel)]="form.email" required />
            </label>

            <label>
              Subject
              <input type="text" name="subject" [(ngModel)]="form.subject" />
            </label>

            <label>
              Message
              <textarea name="message" rows="8" [(ngModel)]="form.message" required></textarea>
            </label>

            <button class="button button-primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactPageComponent {
  protected form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  protected openMailto(): void {
    const subject = this.form.subject.trim() || `Website message from ${this.form.name.trim()}`;
    const body =
      `From: ${this.form.name.trim()} <${this.form.email.trim()}>` +
      `\n\n${this.form.message.trim()}`;

    const mailto = new URL('mailto:brooksryan63@gmail.com');
    mailto.searchParams.set('subject', subject);
    mailto.searchParams.set('body', body);
    window.location.href = mailto.toString();
  }
}
