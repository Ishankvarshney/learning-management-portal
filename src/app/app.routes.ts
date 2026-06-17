import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.route')
        .then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    canActivate: [authGuard],

    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(
        (c) => c.MainLayout
      ),

    children: [
      {
        path: 'dashboard',

        loadComponent: () =>
          import('./features/dashboard/dashboard').then(
            (c) => c.Dashboard
          ),
      },

      {
        path: 'employees',

        loadComponent: () =>
          import(
            './features/employees/pages/employees-list/employees-list'
          ).then(
            (c) => c.EmployeesList
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
