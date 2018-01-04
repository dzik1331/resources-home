import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  test() {
    this.router.navigate(['/add']);
  }
}
