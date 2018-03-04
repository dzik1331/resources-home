import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {
  @Input() items;
  public url: string = environment.restUrl;

  constructor() {
  }

  ngOnInit() {
  }

}
