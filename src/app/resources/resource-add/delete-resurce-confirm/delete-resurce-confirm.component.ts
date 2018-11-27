import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resurce-confirm.component.html',
  styleUrls: ['./delete-resurce-confirm.component.scss']
})
export class DeleteResourceConfirmComponent implements OnInit {

  public person: string;
  public onClose: Subject<any>;

  constructor(private modalRef: BsModalRef) {
  }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  closeConfirm(value) {
    this.onClose.next(value);
    this.onClose.unsubscribe();
    this.close();
  }

  close() {
    this.modalRef.hide();
  }

}
