import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { DisplayErrorComponent } from '../display-error/display-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
LoginForm:FormGroup;
constructor(
  private _router: Router,
  private _userservice: UserService,
  private _formBuilder: FormBuilder
) { }
ngOnInit(){
  this.LoginForm=this._formBuilder.group({
    username: [null, [Validators.required,Validators.minLength]],
    password: [null, [Validators.required,Validators.minLength]]
  });
}
login() {
  if(this.LoginForm.valid){
    console.log('login');
  }
  else{
    this.validateFormFields(this.LoginForm);
  }
}
  isFieldValid(field:string){
    return !this.LoginForm.get(field).valid && this.LoginForm.get(field).touched;
  }
  displayFieldCss(field:string){
    return{
      'has-error':this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    }
  }
  validateFormFields(_formGroup: FormGroup){
    Object.keys(_formGroup.controls).forEach(field=>{
      const control = _formGroup.get(field);
      if(control instanceof FormGroup){
        control.markAsTouched({onlySelf:true});
      }else if(control instanceof FormGroup ){
        this.validateFormFields(control);
      }
    })
  }

}
