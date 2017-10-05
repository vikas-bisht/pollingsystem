import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { LoaderService } from '../loader.service';
import { DisplayErrorComponent } from '../display-error/display-error.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: any = {};
  loading = false;
  RegistrationForm: FormGroup;
  error: any;
  constructor(
    private _router: Router,
    private _userservice: UserService,
    private _formBuilder: FormBuilder,
    private _loaderService: LoaderService,
  ) { }
  ngOnInit() {
    this.RegistrationForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength]],
      username: [null, [Validators.required, Validators.minLength]],
      password: [null, [Validators.required, Validators.minLength]]
    });
    this._loaderService.displayLoader(true);
    this._loaderService.displayLoader(false);
  }
  register() {
    if (this.RegistrationForm.valid) {
      this._userservice.create(this.RegistrationForm.value)
        .subscribe(data => {
          if (data.error == 1) {
            this.error = data.message;
            alert(this.error);
            this.RegistrationForm.reset();
          } else {
            alert('Registration SuccessFull');
            this._router.navigate(['/login']);
          }
        },
        error => { });
    }
    else {
      this.validateFormFields(this.RegistrationForm);
    }
  }
  isFieldValid(field: string) {
    return !this.RegistrationForm.get(field).valid && this.RegistrationForm.get(field).touched;
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
