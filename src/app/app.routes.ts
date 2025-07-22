import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent) },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(c => c.ProjectsComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(c => c.ContactComponent) }
];