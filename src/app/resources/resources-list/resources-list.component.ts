import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-books-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  public items: any[] = [];
  public url: string = environment.restUrl;
  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.rest.resourcesList().subscribe((result: any[]) => {
      this.items = result;
    }, (error) => {
      console.error(error);
    });
  }

}
