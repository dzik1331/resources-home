import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../services/rest.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ResourcesService} from '../services/resources.service';
import {isNull} from 'util';

@Component({
  selector: 'app-books-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  public typeList: number = 1;
  public items: any[] = [];
  public filterText: string;
  @Input('id') typeId: number = 0;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private location: Location,
              private resource: ResourcesService) {
  }

  ngOnInit() {
    this.resource.changeTypeList.subscribe((result: number) => {
      this.typeList = result;
    });
    console.debug(this.resource.getTypeListStorage());
    this.typeList = !isNull(this.resource.getTypeListStorage()) ? +this.resource.getTypeListStorage() : 1;

    this.rest.resourcesList(this.typeId).subscribe((result: any[]) => {
      this.items = result.sort((a, b) => a.title.localeCompare(b.title));
    }, (error) => {
      console.error(error);
    });
  }

  public doFilter() {
    this.rest.resourcesList(this.typeId, this.filterText).subscribe((result: any[]) => {
      this.items = result.sort((a, b) => a.title.localeCompare(b.title));
    }, (error) => {
      console.error(error);
    });
  }

  public back() {
    this.location.back();
  }

}
