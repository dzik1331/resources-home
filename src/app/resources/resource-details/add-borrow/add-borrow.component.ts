import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-borrow',
  templateUrl: './add-borrow.component.html',
  styleUrls: ['./add-borrow.component.scss']
})
export class AddBorrowComponent implements OnInit {

  public person: string;

  constructor(public dialogRef: MatDialogRef<AddBorrowComponent>) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
