import {Component, OnInit} from '@angular/core';
import {RestService} from './rest.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public clearing: boolean = false;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
  }


  clearImages(target) {
    this.clearing = true;
    setTimeout(() => {
      this.rest.clearImages().subscribe(() => {
        this.clearing = false;
        target.toggle();
      }, (error) => {
        console.error(error);
      });
    }, 1000);
  }
}
