import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'resources',
    pathMatch: 'full'
  },
  {
    path: 'resources',
    loadChildren: './resources/resources.module#ResourcesModule'
  },
  {
    path: '**',
    redirectTo: 'test'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true,
  enableTracing: false
});
