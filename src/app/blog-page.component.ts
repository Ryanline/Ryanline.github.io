import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { blogPosts } from './blog.data';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-section page-section-plain">
      <div class="blog-layout">
        <aside class="blog-sidebar" aria-label="Blog post list">
          <div class="blog-sidebar-stack">
            @for (post of posts; track post.slug) {
              <article class="blog-sidebar-card" [class.blog-sidebar-card--active]="post.slug === activePost().slug">
                <div class="blog-sidebar-meta">
                  <span>{{ post.category }}</span>
                  <span>{{ post.createdAt }}</span>
                </div>

                <h3>
                  <a [routerLink]="['/blog', post.slug]">{{ post.title }}</a>
                </h3>

                <p>{{ post.summary }}</p>
              </article>
            }
          </div>
        </aside>

        <article class="blog-article">
          <div class="blog-article-meta">
            <span>{{ activePost().category }}</span>
            <span>{{ activePost().createdAt }}</span>
          </div>

          <h1>{{ activePost().title }}</h1>
          <p class="blog-article-summary">{{ activePost().summary }}</p>

          @if (activePost().sourcePdf) {
            <p class="blog-article-source">
              <a [href]="activePost().sourcePdf" target="_blank" rel="noopener">Open original PDF</a>
            </p>
          }

          @if (activePost().coverImage) {
            <div class="blog-cover">
              <img [src]="activePost().coverImage" alt="" aria-hidden="true" />
            </div>
          }

          <div class="blog-content">
            @for (section of activePost().sections; track section.heading) {
              <section class="blog-section">
                <h2>{{ section.heading }}</h2>

                @for (paragraph of section.paragraphs; track paragraph) {
                  <p>{{ paragraph }}</p>
                }
              </section>
            }
          </div>
        </article>
      </div>
    </section>
  `,
})
export class BlogPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: null,
  });

  protected readonly posts = blogPosts;
  protected readonly activePost = computed(() => {
    const slug = this.slug();
    return blogPosts.find((post) => post.slug === slug) ?? blogPosts[0];
  });
}
