import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { BlogPageComponent } from './blog-page.component';
import { ContactPageComponent } from './contact-page.component';
import { HomePageComponent } from './home-page.component';
import { ResumePageComponent } from './resume-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:slug', component: BlogPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];
