import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddBorrowComponent} from './add-borrow/add-borrow.component';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {

  private resourceId: any = null;
  public resource: any = null;
  public loaded: boolean = false;

  constructor(private rest: RestService, private route: ActivatedRoute, private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.resourceId = this.route.snapshot.paramMap.get('id');
    this.getData(this.resourceId);
  }

  public setReturn(id: any) {
    this.rest.isReturn(id).subscribe((result) => {
      this.getData(this.resourceId);
    }, (error) => console.error(error));
  }

  public opedAddBorrowDialog() {
    const dialogRef = this.dialog.open(AddBorrowComponent, {width: '250px'});
    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result)) {
        this.rest.addBorrow(result, this.resourceId).subscribe((result) => {
          this.getData(this.resourceId);
        }, (error) => {
          console.error(error);
        });
      }
    });
  }

  public getData(resourceId) {
    this.rest.resource(resourceId).subscribe((result) => {
      this.resource = result;
      this.loaded = true;
    }, (error) => {
      console.error(error);
    });
  }

  isActiveBorrow(data): boolean {
    let result = false;
    if (isNullOrUndefined(data)) {
      return result;
    }
    data.borrows.some((item) => {
      if (item.active) {
        result = true;
        return true;
      }
    });
    return result;
  }

}
