import { Routes } from '@angular/router';
import { AuthLayout } from '../../layout/auth-layout/auth-layout';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayout,

    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login').then(
            c => c.Login
          )
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./forgot-password/forgot-password').then(
            c => c.ForgotPassword
          )
      }
    ]
  }
];