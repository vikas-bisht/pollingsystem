import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

//import { LoginService } from './login.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { LoaderService } from '../loader.service';
import { DisplayErrorComponent } from '../display-error/display-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loading: any;
  user: any = {};
  error: any;
  LoginForm: FormGroup;
  constructor(
    private _router: Router,
    private _userservice: UserService,
    private _formBuilder: FormBuilder,
    private _loaderService: LoaderService,
    //    private _loginService: LoginService
  ) { }
  ngOnInit() {
    this.LoginForm = this._formBuilder.group({
      username: [null, [Validators.required, Validators.minLength]],
      password: [null, [Validators.required, Validators.minLength]]
    });
    this._loaderService.displayLoader(true);
    this._loaderService.displayLoader(false);
  }
  login() {
    if (this.LoginForm.valid) {
      this._userservice.login(this.LoginForm.get('username').value, this.LoginForm.get('password').value)
        .subscribe(
        data => {
          if (data.error == 1) {
            alert("User Doesn't Exist");
          } else {
            alert('Login SuccessFull');
          }
        },
        error => {
        }
        )
    }
    else {
      this.validateFormFields(this.LoginForm);
    }
  }
  isFieldValid(field: string) {
    return !this.LoginForm.get(field).valid && this.LoginForm.get(field).touched;
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
