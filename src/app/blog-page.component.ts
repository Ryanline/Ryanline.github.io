import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { BlogFigure, BlogPost, BlogSection, blogPosts } from './blog.data';

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

          @if (activePost().coverImage) {
            <div class="blog-cover">
              <img [src]="activePost().coverImage" alt="" aria-hidden="true" />
            </div>
          }

          <div class="blog-content">
            @for (section of activePost().sections; track section.heading) {
              <section class="blog-section">
                @for (figure of getSectionFigures(section, -1); track figure.title) {
                  <div class="blog-figure-wrap">
                    <h3 class="blog-figure-title">{{ figure.title }}</h3>
                    @switch (figure.kind) {
                      @case ('service-models') {
                        <div class="blog-figure blog-figure-service-models">
                          <div class="service-model-grid">
                            <article class="service-model-card service-model-card--traditional">
                              <h4>Traditional IT architecture</h4>
                              <ul>
                                <li>Applications</li>
                                <li>Application Framework</li>
                                <li>Compilers</li>
                                <li>Run-time environment</li>
                                <li>Databases</li>
                                <li>Operating system</li>
                                <li>Virtual machine</li>
                                <li>Server hardware</li>
                                <li>Storage</li>
                                <li>Networking</li>
                              </ul>
                            </article>

                            <article class="service-model-card">
                              <h4>Infrastructure as a service (IaaS)</h4>
                              <ul>
                                <li>Applications</li>
                                <li>Application Framework</li>
                                <li>Compilers</li>
                                <li>Run-time environment</li>
                                <li>Databases</li>
                                <li class="service-model-managed">Operating system</li>
                                <li class="service-model-managed">Virtual machine</li>
                                <li class="service-model-managed">Server hardware</li>
                                <li class="service-model-managed">Storage</li>
                                <li class="service-model-managed">Networking</li>
                              </ul>
                            </article>

                            <article class="service-model-card">
                              <h4>Platform as a service (PaaS)</h4>
                              <ul>
                                <li>Applications</li>
                                <li class="service-model-managed">Application Framework</li>
                                <li class="service-model-managed">Compilers</li>
                                <li class="service-model-managed">Run-time environment</li>
                                <li class="service-model-managed">Databases</li>
                                <li class="service-model-managed">Operating system</li>
                                <li class="service-model-managed">Virtual machine</li>
                                <li class="service-model-managed">Server hardware</li>
                                <li class="service-model-managed">Storage</li>
                                <li class="service-model-managed">Networking</li>
                              </ul>
                            </article>

                            <article class="service-model-card">
                              <h4>Software as a service (SaaS)</h4>
                              <ul>
                                <li class="service-model-managed">Applications</li>
                                <li class="service-model-managed">Application Framework</li>
                                <li class="service-model-managed">Compilers</li>
                                <li class="service-model-managed">Run-time environment</li>
                                <li class="service-model-managed">Databases</li>
                                <li class="service-model-managed">Operating system</li>
                                <li class="service-model-managed">Virtual machine</li>
                                <li class="service-model-managed">Server hardware</li>
                                <li class="service-model-managed">Storage</li>
                                <li class="service-model-managed">Networking</li>
                              </ul>
                            </article>
                          </div>

                          <div class="service-model-notes">
                            <p>More complex. More upfront cost. Less scalable. More customizable.</p>
                            <p>Less complex. Lower upfront cost. More scalable. Less customizable.</p>
                          </div>
                        </div>
                      }
                      @case ('asp-vs-saas') {
                        <div class="blog-figure blog-figure-table">
                          <table>
                            <thead>
                              <tr>
                                <th>ASP</th>
                                <th>SaaS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Hosts and provides application software (same).</td>
                                <td>Hosts and provides application software (same).</td>
                              </tr>
                              <tr>
                                <td>Software was designed to be installed locally, so using it via ASP is unique.</td>
                                <td>Software was designed for cloud computing.</td>
                              </tr>
                              <tr>
                                <td>Usually a single instance of software per customer.</td>
                                <td>Usually multi-tenant architecture, meaning a single instance serves multiple clients.</td>
                              </tr>
                              <tr>
                                <td>Each client’s instance requires separate management, updates, and resources.</td>
                                <td>When software is managed, updated, and resourced, this reflects for all clients together.</td>
                              </tr>
                              <tr>
                                <td>Usually not scalable.</td>
                                <td>Usually scalable.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      }
                      @case ('major-developments') {
                        <div class="blog-figure blog-figure-table">
                          <table>
                            <thead>
                              <tr>
                                <th></th>
                                <th>Amazon Web Services</th>
                                <th>Google Cloud</th>
                                <th>Microsoft Azure</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Object storage</td>
                                <td>S3 (2006)</td>
                                <td>Google Cloud Storage (2010)</td>
                                <td>Azure Blob Storage (2008)</td>
                              </tr>
                              <tr>
                                <td>IaaS</td>
                                <td>EC2 (2006)</td>
                                <td>Google Compute Engine (2012)</td>
                                <td>Azure Virtual Machines (2012)</td>
                              </tr>
                              <tr>
                                <td>PaaS</td>
                                <td>Elastic Beanstalk (2008)</td>
                                <td>Google App Engine (2011)</td>
                                <td>Azure App Service (2015)</td>
                              </tr>
                              <tr>
                                <td>Scaling</td>
                                <td>Auto-scaling (2009)</td>
                                <td>Google Cloud Autoscaler (2014)</td>
                                <td>Azure Autoscale (2014)</td>
                              </tr>
                              <tr>
                                <td>Machine Learning</td>
                                <td>SageMaker (2017)<br />SM Studio (2022)</td>
                                <td>Cloud Machine Learning (2016)<br />Vertex AI (2021)</td>
                                <td>Azure Machine Learning (2014)</td>
                              </tr>
                              <tr>
                                <td>Serverless</td>
                                <td>Lambda (2014)</td>
                                <td>Google Cloud Functions (2018)</td>
                                <td>Azure Functions (2016)</td>
                              </tr>
                              <tr>
                                <td>Container</td>
                                <td>ECS (2015)<br />EKS (2018)</td>
                                <td>Google Kubernetes Engine (2014)</td>
                                <td>Azure Kubernetes Service (2017)</td>
                              </tr>
                              <tr>
                                <td>Hybrid Cloud</td>
                                <td>Outposts (2019)</td>
                                <td>Anthos (2019)</td>
                                <td>Azure Stack (2017)<br />Azure Arc (2019)</td>
                              </tr>
                              <tr>
                                <td>Generative AI Models</td>
                                <td>Bedrock (2023)<br />Amazon Q (2024)</td>
                                <td>Gemini (2023)</td>
                                <td>Azure OpenAI (2021)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      }
                      @case ('image') {
                        <figure class="blog-figure blog-figure-image blog-figure-image--compact">
                          <img [src]="figure.imageSrc" [alt]="figure.imageAlt ?? ''" />
                          @if (figure.caption) {
                            <figcaption>{{ figure.caption }}</figcaption>
                          }
                        </figure>
                      }
                    }
                  </div>
                }

                <h2>{{ section.heading }}</h2>

                @for (paragraph of section.paragraphs; track paragraph; let index = $index) {
                  <p [innerHTML]="formatParagraph(paragraph)"></p>

                  @for (figure of getSectionFigures(section, index); track figure.title) {
                    <div class="blog-figure-wrap">
                      <h3 class="blog-figure-title">{{ figure.title }}</h3>
                      @switch (figure.kind) {
                        @case ('service-models') {
                          <div class="blog-figure blog-figure-service-models">
                            <div class="service-model-grid">
                              <article class="service-model-card service-model-card--traditional">
                                <h4>Traditional IT architecture</h4>
                                <ul>
                                  <li>Applications</li>
                                  <li>Application Framework</li>
                                  <li>Compilers</li>
                                  <li>Run-time environment</li>
                                  <li>Databases</li>
                                  <li>Operating system</li>
                                  <li>Virtual machine</li>
                                  <li>Server hardware</li>
                                  <li>Storage</li>
                                  <li>Networking</li>
                                </ul>
                              </article>

                              <article class="service-model-card">
                                <h4>Infrastructure as a service (IaaS)</h4>
                                <ul>
                                  <li>Applications</li>
                                  <li>Application Framework</li>
                                  <li>Compilers</li>
                                  <li>Run-time environment</li>
                                  <li>Databases</li>
                                  <li class="service-model-managed">Operating system</li>
                                  <li class="service-model-managed">Virtual machine</li>
                                  <li class="service-model-managed">Server hardware</li>
                                  <li class="service-model-managed">Storage</li>
                                  <li class="service-model-managed">Networking</li>
                                </ul>
                              </article>

                              <article class="service-model-card">
                                <h4>Platform as a service (PaaS)</h4>
                                <ul>
                                  <li>Applications</li>
                                  <li class="service-model-managed">Application Framework</li>
                                  <li class="service-model-managed">Compilers</li>
                                  <li class="service-model-managed">Run-time environment</li>
                                  <li class="service-model-managed">Databases</li>
                                  <li class="service-model-managed">Operating system</li>
                                  <li class="service-model-managed">Virtual machine</li>
                                  <li class="service-model-managed">Server hardware</li>
                                  <li class="service-model-managed">Storage</li>
                                  <li class="service-model-managed">Networking</li>
                                </ul>
                              </article>

                              <article class="service-model-card">
                                <h4>Software as a service (SaaS)</h4>
                                <ul>
                                  <li class="service-model-managed">Applications</li>
                                  <li class="service-model-managed">Application Framework</li>
                                  <li class="service-model-managed">Compilers</li>
                                  <li class="service-model-managed">Run-time environment</li>
                                  <li class="service-model-managed">Databases</li>
                                  <li class="service-model-managed">Operating system</li>
                                  <li class="service-model-managed">Virtual machine</li>
                                  <li class="service-model-managed">Server hardware</li>
                                  <li class="service-model-managed">Storage</li>
                                  <li class="service-model-managed">Networking</li>
                                </ul>
                              </article>
                            </div>

                            <div class="service-model-notes">
                              <p>More complex. More upfront cost. Less scalable. More customizable.</p>
                              <p>Less complex. Lower upfront cost. More scalable. Less customizable.</p>
                            </div>
                          </div>
                        }
                        @case ('asp-vs-saas') {
                          <div class="blog-figure blog-figure-table">
                            <table>
                              <thead>
                                <tr>
                                  <th>ASP</th>
                                  <th>SaaS</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Hosts and provides application software (same).</td>
                                  <td>Hosts and provides application software (same).</td>
                                </tr>
                                <tr>
                                  <td>Software was designed to be installed locally, so using it via ASP is unique.</td>
                                  <td>Software was designed for cloud computing.</td>
                                </tr>
                                <tr>
                                  <td>Usually a single instance of software per customer.</td>
                                  <td>Usually multi-tenant architecture, meaning a single instance serves multiple clients.</td>
                                </tr>
                                <tr>
                                  <td>Each client’s instance requires separate management, updates, and resources.</td>
                                  <td>When software is managed, updated, and resourced, this reflects for all clients together.</td>
                                </tr>
                                <tr>
                                  <td>Usually not scalable.</td>
                                  <td>Usually scalable.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        }
                        @case ('major-developments') {
                          <div class="blog-figure blog-figure-table">
                            <table>
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Amazon Web Services</th>
                                  <th>Google Cloud</th>
                                  <th>Microsoft Azure</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Object storage</td>
                                  <td>S3 (2006)</td>
                                  <td>Google Cloud Storage (2010)</td>
                                  <td>Azure Blob Storage (2008)</td>
                                </tr>
                                <tr>
                                  <td>IaaS</td>
                                  <td>EC2 (2006)</td>
                                  <td>Google Compute Engine (2012)</td>
                                  <td>Azure Virtual Machines (2012)</td>
                                </tr>
                                <tr>
                                  <td>PaaS</td>
                                  <td>Elastic Beanstalk (2008)</td>
                                  <td>Google App Engine (2011)</td>
                                  <td>Azure App Service (2015)</td>
                                </tr>
                                <tr>
                                  <td>Scaling</td>
                                  <td>Auto-scaling (2009)</td>
                                  <td>Google Cloud Autoscaler (2014)</td>
                                  <td>Azure Autoscale (2014)</td>
                                </tr>
                                <tr>
                                  <td>Machine Learning</td>
                                  <td>SageMaker (2017)<br />SM Studio (2022)</td>
                                  <td>Cloud Machine Learning (2016)<br />Vertex AI (2021)</td>
                                  <td>Azure Machine Learning (2014)</td>
                                </tr>
                                <tr>
                                  <td>Serverless</td>
                                  <td>Lambda (2014)</td>
                                  <td>Google Cloud Functions (2018)</td>
                                  <td>Azure Functions (2016)</td>
                                </tr>
                                <tr>
                                  <td>Container</td>
                                  <td>ECS (2015)<br />EKS (2018)</td>
                                  <td>Google Kubernetes Engine (2014)</td>
                                  <td>Azure Kubernetes Service (2017)</td>
                                </tr>
                                <tr>
                                  <td>Hybrid Cloud</td>
                                  <td>Outposts (2019)</td>
                                  <td>Anthos (2019)</td>
                                  <td>Azure Stack (2017)<br />Azure Arc (2019)</td>
                                </tr>
                                <tr>
                                  <td>Generative AI Models</td>
                                  <td>Bedrock (2023)<br />Amazon Q (2024)</td>
                                  <td>Gemini (2023)</td>
                                  <td>Azure OpenAI (2021)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        }
                        @case ('image') {
                          <figure class="blog-figure blog-figure-image blog-figure-image--compact">
                            <img [src]="figure.imageSrc" [alt]="figure.imageAlt ?? ''" />
                            @if (figure.caption) {
                              <figcaption>{{ figure.caption }}</figcaption>
                            }
                          </figure>
                        }
                      }
                    </div>
                  }
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

  protected readonly posts = blogPosts.map((post) => this.normalizePost(post));
  protected readonly activePost = computed(() => {
    const slug = this.slug();
    return this.posts.find((post) => post.slug === slug) ?? this.posts[0];
  });

  protected getSectionFigures(section: BlogSection, afterParagraph: number): BlogFigure[] {
    return section.figures?.filter((figure) => figure.afterParagraph === afterParagraph) ?? [];
  }

  private normalizePost(post: BlogPost): BlogPost {
    return {
      ...post,
      title: this.cleanText(post.title),
      summary: this.cleanText(post.summary),
      sections: post.sections.map((section) => ({
        ...section,
        heading: this.cleanText(section.heading),
        paragraphs: section.paragraphs.map((paragraph) => this.cleanText(paragraph)),
        figures: section.figures?.map((figure) => ({
          ...figure,
          title: this.cleanText(figure.title),
          caption: figure.caption ? this.cleanText(figure.caption) : figure.caption,
        })),
      })),
    };
  }

  private cleanText(text: string): string {
    const replacements: Array<[string, string]> = [
      ['â€™', '’'],
      ['â€œ', '“'],
      ['â€\u009d', '”'],
      ['â€', '”'],
      ['â€˜', '‘'],
      ['â€“', '–'],
      ['â€”', '—'],
      ['â€¦', '…'],
      ['â€', '”'],
      ['Ã³', 'ó'],
      ['Ã©', 'é'],
      ['CorbatÃ³', 'Corbató'],
      ['ChalÃ©', 'Chalé'],
      ['\t', ' '],
      ['  ', ' '],
    ];

    return replacements.reduce((value, [from, to]) => value.split(from).join(to), text).trim();
  }

  protected formatParagraph(text: string): string {
    const cleaned = this.cleanText(text);
    const italics: Array<[string, string]> = [
      [
        'The Architecture of Computer Hardware, Systems Software, and Networking: An Information Technology Approach, 6th Edition',
        '<em>The Architecture of Computer Hardware, Systems Software, and Networking: An Information Technology Approach, 6th Edition</em>',
      ],
      ['A beginner’s guide', '<em>A beginner’s guide</em>'],
      ['Stories', '<em>Stories</em>'],
      ['The New York Times', '<em>The New York Times</em>'],
      ['Scientific American', '<em>Scientific American</em>'],
      ['GALE ACADEMIC ONEFILE', '<em>GALE ACADEMIC ONEFILE</em>'],
      ['Amoeba', '<em>Amoeba</em>'],
    ];

    return italics.reduce((value, [from, to]) => value.split(from).join(to), cleaned);
  }
}
