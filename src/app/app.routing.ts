import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: () => import('./views/authentication/login/login.module').then(m => m.LoginModule),
  }, {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path        : 'ui',
    loadChildren: () => import('./views/ui/ui.module').then(m => m.UIModule)
},
  {
    path: '**',
    redirectTo: 'error-404'
  }
];