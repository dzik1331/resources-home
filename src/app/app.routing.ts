import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule'
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
