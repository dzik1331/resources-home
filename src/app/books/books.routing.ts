import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BooksComponent} from './books.component';
import {BooksListComponent} from './books-list/books-list.component';
import {BookAddComponent} from './book-add/book-add.component';

export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BooksListComponent
      },
      {
        path: 'add',
        component: BookAddComponent,
        data: {
          reload: true
        }
      }
    ]
  }
];

export const BooksRouting: ModuleWithProviders = RouterModule.forChild(routes);
