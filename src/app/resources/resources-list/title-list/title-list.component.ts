import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss']
})
export class TitleListComponent implements OnInit {
  @Input() items;
  public url: string = environment.restUrl;

  constructor() {
  }

  ngOnInit() {
  }

}
