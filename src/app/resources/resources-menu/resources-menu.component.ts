import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../services/rest.service';
import {ResourcesService} from '../services/resources.service';
import {TabsetComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-resources-menu',
  templateUrl: './resources-menu.component.html',
  styleUrls: ['./resources-menu.component.scss']
})
export class ResourcesMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('tab') tab: TabsetComponent;
  public types: any = [];
  public loaded: boolean = false;

  constructor(private rest: RestService,
              private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.rest.types().subscribe((result: any) => {
      this.types = result.map((item) => {
        return Object.assign(item, {ico: this.resourcesService.setIco(item)});
      });
    }, (error) => {
      console.error(error);
    });
  }

  ngAfterViewInit() {
    if (this.resourcesService.getActiveTab()) {
      setTimeout(() => {
        const index = this.tab.tabs.findIndex((t) => t.id == this.resourcesService.getActiveTab());
        if (index != -1) {
          this.tab.tabs[index].active = true;
        }
        this.loaded = true;
      }, 100);
    } else {
      this.loaded = true;
    }
  }

  changeTab(e) {
    this.resourcesService.setActiveTab(e.id);
  }
}


