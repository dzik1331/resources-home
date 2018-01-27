import {Component, OnInit} from '@angular/core';
import {RestService} from '../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AddBorrowComponent} from './add-borrow/add-borrow.component';
import {isNullOrUndefined} from 'util';
import {environment} from '../../../environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {

  private resourceId: any = null;
  public resource: any = null;
  public loaded: boolean = false;
  public url: string = environment.restUrl;

  constructor(private rest: RestService, private route: ActivatedRoute, private router: Router,
              private dialog: MatDialog, private location: Location) {
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
        this.rest.addBorrow(result, this.resourceId).subscribe(() => {
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

  public isActiveBorrow(data): boolean {
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

  public deleteBorrow(id) {
    const dialogRef = this.dialog.open(DeleteBorrowConfirmComponent, {width: '250px', disableClose: true});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rest.deleteBorrow(id).subscribe(() => {
          this.getData(this.resourceId);
        }, (error) => {
          console.error(error);
        });
      }
    });
  }

  public back() {
    this.location.back();
    // let pathurl = '';
    // this.route.pathFromRoot.forEach((path) => {
    //   if (this.route.url != path.url) {
    //     path.url.subscribe((url) => {
    //       url.forEach((e) => {
    //         pathurl += e + '/';
    //       });
    //     });
    //   }
    // });
  }

}

@Component({
  selector: 'app-delete-borrow-confirm',
  templateUrl: './delete-borrow-confirm.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class DeleteBorrowConfirmComponent {
  constructor(public dialogRef: MatDialogRef<DeleteBorrowConfirmComponent>) {
  }

  closeConfirm(result) {
    this.dialogRef.close(result);
  }
}
