import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: any = {};
  RegistrationForm: FormGroup;
  constructor(
    private _router: Router,
    private _userservice: UserService,
    private _formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.RegistrationForm = this._formBuilder.group({
      name: [null, [Validators.required,Validators.minLength]],
      username: [null, [Validators.required,Validators.minLength]],
      password: [null, [Validators.required,Validators.minLength]]
    });
  }
  register() {
    this._userservice.create(this.user)
      .subscribe(user => this.user = user)
  }
}
