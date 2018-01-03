import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  public items: any[] = [];

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.rest.bookList().subscribe((result: any[]) => {
      console.debug(result);
      this.items = result;
    }, (error) => {
      console.error(error);
    });
  }

}
