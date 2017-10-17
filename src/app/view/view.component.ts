import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalModule } from 'ng2-modal';

import { ViewService } from './view.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  data: any;
  editData: any;
  changeTitleForm: FormGroup;
  newOptionForm: FormGroup;

  constructor(
    private _router: Router,
    private _viewService: ViewService,
    private _userservice: UserService,
    private _formBuilder: FormBuilder
  ) {
  }
  ngOnInit() {
    this._viewService.view().subscribe(data => {
      this.data = data.data
    })
    this.changeTitleForm = this._formBuilder.group({
      title: [null, [Validators.required]]
    });
    this.newOptionForm = this._formBuilder.group({
      option: [null, [Validators.required]]
    });

  }
  delete(id: any) {
    this._userservice.delete(id).subscribe((data => { }))
    this._viewService.view().subscribe(data => {
      this.data = data.data
    });
  }
  editTitle(id: any) {
    this._userservice.summary(id).subscribe(data => { console.log(this.editData = data.json()) })

  }
  changeTitle(id: any, title: any) {
    this._userservice.editTitle(id, title).subscribe((data) => { })
    this._viewService.view().subscribe((data) => {
      this.data = data.data
    })
  }
  newopt(id: any, option: any) {
    this._userservice.newOption(id, option.option).subscribe((data) => { console.log(data) })
    this._viewService.view().subscribe((data) => {
      this.data = data.data
    })
    this.newOptionForm.reset();
  }
  deleteOption(id: any, optionName: any) {
    console.log(id, optionName)
    this._userservice.deleteOption(id, optionName).subscribe((data => { }))
    this._viewService.view().subscribe((data) => {
      this.data = data.data
    })
  }
}
