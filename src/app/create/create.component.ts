import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UserService } from '../user.service';
import { DisplayErrorComponent } from '../display-error/display-error.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  PollCreationForm: FormGroup;
  error: any;
  constructor(
    private _userservice: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {

  }
  ngOnInit() {
    this.PollCreationForm = this._formBuilder.group({
      title: [null, [Validators.required, Validators.minLength]],
      option1: [null, [Validators.required, Validators.minLength]],
      option2: [null, [Validators.required, Validators.minLength]],
      option3: [null, [Validators.required, Validators.minLength]],
      option4: [null, [Validators.required, Validators.minLength]]
    });
  }
  create() {
    if (this.PollCreationForm.valid) {
      this._userservice.create(this.PollCreationForm.value)
        .subscribe(data => {
          if (data.error == 0) {
            alert("Data Entered Successfully");
            this._router.navigate(['/home'])
          }
        },
        error => { })
    }
    else {
      this.validateFormFields(this.PollCreationForm)
    }
  }
  isFieldValid(field: string) {
    return !this.PollCreationForm.get(field).valid && this.PollCreationForm.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    }
  }
  validateFormFields(_formGroup: FormGroup) {
    Object.keys(_formGroup.controls).forEach(field => {
      const control = _formGroup.get(field);
      if (control instanceof FormGroup) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    })
  }

}
