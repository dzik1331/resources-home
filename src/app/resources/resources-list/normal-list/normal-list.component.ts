import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.scss']
})
export class NormalListComponent implements OnInit {
  @Input() items;
  public url: string = environment.restUrl;

  constructor() {
  }

  ngOnInit() {
  }

}
