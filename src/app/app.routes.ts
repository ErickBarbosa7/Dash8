import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: { title: 'Dashboard' }
  },
  {
    path: 'database',
    loadComponent: () => import('./components/database/database.component').then(m => m.DatabaseComponent),
    data: { title: 'Database' }
  },
  {
    path: 'cloud-storage',
    loadComponent: () => import('./components/cloud-storage/cloud-storage.component').then(m => m.CloudStorageComponent),
    data: { title: 'Cloud Storage' }
  },
  {
    path: 'reports',
    loadComponent: () => import('./components/reports/reports.component').then(m => m.ReportsComponent),
    data: { title: 'Reports' }
  },
  {
    path: 'security',
    loadComponent: () => import('./components/security/security.component').then(m => m.SecurityComponent),
    data: { title: 'Security' }
  },
  {
    path: 'extensions',
    loadComponent: () => import('./components/extensions/extensions.component').then(m => m.ExtensionsComponent),
    data: { title: 'Extensions' }
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent),
    data: { title: 'Settings' }
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];