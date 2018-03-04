import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.scss']
})
export class FullImageComponent implements OnInit {
  public url: string = environment.restUrl;
  public image: string;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.image = this.route.snapshot.paramMap.get('fileName');
  }

  back() {
    this.location.back();
  }

}
