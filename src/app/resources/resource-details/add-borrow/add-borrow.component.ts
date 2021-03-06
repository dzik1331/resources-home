import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-add-borrow',
  templateUrl: './add-borrow.component.html',
  styleUrls: ['./add-borrow.component.scss']
})
export class AddBorrowComponent implements OnInit {

  public person: string;
  public onClose: Subject<any>;

  constructor(private modalRef: BsModalRef) {
  }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  close() {
    this.modalRef.hide();
  }

  add() {
    this.onClose.next(this.person);
    this.onClose.unsubscribe();
    this.close();
  }

}
