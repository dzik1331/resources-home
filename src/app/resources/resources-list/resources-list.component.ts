import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  public items: any[] = [];

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.rest.resourcesList().subscribe((result: any[]) => {
      console.debug(result);
      this.items = result;
    }, (error) => {
      console.error(error);
    });
  }

}
