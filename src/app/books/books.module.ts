import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from './books.component';
import {BooksRouting} from './books.routing';
import {
  MatButtonModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BooksListComponent} from './books-list/books-list.component';
import {RestService} from './rest.service';
import {BookAddComponent} from './book-add/book-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileSelectDirective, FileDropDirective} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    BooksRouting,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BooksComponent, BooksListComponent, BookAddComponent, FileSelectDirective, FileDropDirective],
  providers: [RestService]
})
export class BooksModule {
}
