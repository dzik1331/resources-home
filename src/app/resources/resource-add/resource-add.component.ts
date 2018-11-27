import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap';
import {DeleteResourceConfirmComponent} from './delete-resurce-confirm/delete-resurce-confirm.component';

@Component({
  selector: 'app-book-add',
  templateUrl: './resource-add.component.html',
  styleUrls: ['./resource-add.component.scss']
})
export class ResourceAddComponent implements OnInit {

  public form: any;
  public types: any[] = [];
  public submitClick: boolean = false;
  public selectFile: any;
  private resource: any;
  public formLoaded: boolean = false;
  public selectedType: any;
  public update: boolean = false;
  public resourceId: any;

  constructor(private restService: RestService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private modal: BsModalService) {
  }

  ngOnInit() {
    this.resourceId = this.route.snapshot.paramMap.get('id');
    this.restService.types().subscribe((t: any) => {
      this.types = t;
      if (!isNullOrUndefined(this.resourceId)) {
        this.update = true;
        this.restService.resource(this.resourceId).subscribe((result) => {
          this.resource = result;
          this.selectFile = this.resource.details[0].img;
          this.initForm(this.resource);
        }, (error) => {
          console.error(error);
        });
      } else {
        this.initForm(null);
      }
    }, (error) => {
      console.error(error);
    });


  }

  private initForm(data) {
    this.form = this.fb.group({
        title: [data ? data.details[0].title : null, Validators.compose([Validators.required])],
        author: [data ? data.details[0].author : null],
        type: [null, Validators.compose([Validators.required])],
        image: [data ? data.details[0].img : null],
        publishing: [data ? data.details[0].publishing : null]
      }
    );

    if (data) {
      const selected = this.types.filter((item) => {
        return item.name === data.details[0].type;
      });
      if (selected.length > 0) {
        setTimeout(() => {
          this.selectedType = selected[0].id;
          this.form.get('type').setValue(this.selectedType);
        });
      }
    }

    this.formLoaded = true;
  }

  public submit(): void {
    this.submitClick = true;
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      const data = {
        title: this.form.get('title').value,
        author: this.form.get('author').value,
        type: this.form.get('type').value,
        image: this.form.get('image').value,
        publishing: this.form.get('publishing').value
      };
      if (!this.resource) {
        this.restService.addResource(data).subscribe((result) => {
          this.router.navigate(['/resources/main']);
        }, (error) => {
          console.error(error);
        });
      } else {
        if (this.resource.details[0].img === this.selectFile) {
          delete data.image;
        }
        this.restService.editResource(this.resource.details[0].id, data).subscribe((result) => {
          this.getBack();
        }, (error) => {
          console.error(error);
        });
      }
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectFile = file.name;
        console.debug('reader.result', reader.result);
        this.form.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.toString().split(',')[1]
        });
      };
    }
  }

  public validField(field) {
    if ((this.form.controls[field].invalid && this.form.controls[field].touched) ||
      (this.form.controls[field].invalid && this.form.controls[field].untouched && this.submitClick)) {
      return true;
    }
  }

  public getBack() {
    this.location.back();
  }

  public deleteResource(id) {
    const dialogRef = this.modal.show(DeleteResourceConfirmComponent, {});

    dialogRef.content.onClose.subscribe(result => {
      if (result) {
        this.restService.deleteResource(id).subscribe(() => {
          this.router.navigate(['/resources/main']);
        }, (error) => {
          console.error(error);
        });
      }
    });
  }

}
