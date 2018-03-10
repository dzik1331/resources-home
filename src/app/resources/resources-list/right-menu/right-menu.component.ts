import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ResourcesService} from '../../services/resources.service';


@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss'],
  animations: [
    trigger('stateState', [
      state('in', style({
        right: '0'
      })),
      state('out', style({
        right: '-130px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class RightMenuComponent implements OnInit {
  public state: string = 'out';
  @Output() typeList = new EventEmitter();

  constructor(private resource: ResourcesService) {
  }

  ngOnInit() {
  }

  toggle() {
    setTimeout(() => {
      this.state = this.state == 'out' ? 'in' : 'out';
    });
  }

  setType(typeList) {
    this.resource.setTypeListStorage(typeList);
    this.typeList.emit(typeList);
  }
}
