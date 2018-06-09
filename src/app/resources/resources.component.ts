import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RestService} from './services/rest.service';
import {ResourcesService} from './services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  @ViewChild('wrapper') wrapper;
  public clearing: boolean = false;

  constructor(private rest: RestService,
              private renderer: Renderer2,
              private resource: ResourcesService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.resource.changeTypeList.unsubscribe();
  }

  clearImages() {
    this.clearing = true;
    setTimeout(() => {
      this.rest.clearImages().subscribe(() => {
        this.clearing = false;
        this.toggle();
      }, (error) => {
        console.error(error);
      });
    }, 1000);
  }

  toggle() {
    if (this.wrapper.nativeElement.className.indexOf('show') != -1) {
      this.renderer.removeClass(this.wrapper.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.wrapper.nativeElement, 'show');
    }
  }

  setTypeList(type) {
    this.resource.setTypeListStorage(type);
  }
}
