import {Component, OnInit} from '@angular/core';
import {RestService} from '../services/rest.service';
import {ResourcesService} from '../services/resources.service';

@Component({
  selector: 'app-resources-menu',
  templateUrl: './resources-menu.component.html',
  styleUrls: ['./resources-menu.component.scss']
})
export class ResourcesMenuComponent implements OnInit {

  public types: any = [];
  public loaded: boolean = false;

  constructor(private rest: RestService,
              private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.rest.types().subscribe((result: any) => {
      this.types = result.map((item) => {
        return Object.assign(item, {color: this.resourcesService.randomColor()});
      });
      this.loaded = true;
    }, (error) => {
      console.error(error);
    });
  }
}


