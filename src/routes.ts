import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    loadComponent: () =>
      import('./app/components/homepage/homepage.component').then(
        (mod) => mod.HomepageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./app/components/login/login.component').then(
        (mod) => mod.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./app/components/register/register.component').then(
        (mod) => mod.RegisterComponent
      ),
  },
  {
    path: 'recover-password',
    loadComponent: () =>
      import(
        './app/components/recover-password/recover-password.component'
      ).then((mod) => mod.RecoverPasswordComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./app/components/dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
];
