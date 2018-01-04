import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import 'material-design-lite';
import {RestService} from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './resource-add.component.html',
  styleUrls: ['./resource-add.component.scss']
})
export class ResourceAddComponent implements OnInit {

  public form: any;
  public types: any[];
  public submitClick: boolean = false;
  public selectFile: any;

  constructor(private restService: RestService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {

    this.restService.types().subscribe((result: any) => {
      this.types = result;
    }, (error) => {
      console.error(error);
    });

    this.form = this.fb.group({
        title: [null, Validators.compose([Validators.required])],
        author: [null],
        type: [null, Validators.compose([Validators.required])],
        image: [null]
      }
    );
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  public submit(): void {
    this.submitClick = true;
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      console.debug(this.form.controls);
      const data = {
        title: this.form.get('title').value,
        author: this.form.get('author').value,
        type: this.form.get('type').value,
        image: this.form.get('image').value,
      };
      this.restService.addResource(data).subscribe((result) => {
        this.router.navigate(['/resources/list']);
      }, (error) => {
        console.error(error);
      });
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectFile = file.name;
        this.form.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
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

}
