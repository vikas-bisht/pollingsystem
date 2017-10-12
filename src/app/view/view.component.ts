import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup, FormControl} from '@angular/forms';

import { ViewService } from './view.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  data: any;
  editTitleForm: FormGroup;

  constructor(
    private _viewService: ViewService,
    private _userservice: UserService,
    private _formBuilder: FormBuilder
  ) {
  }
  ngOnInit() {
    this._viewService.view().subscribe(data => {
      this.data = data.data
    });
    this.editTitleForm = this._formBuilder.group({
      title:[null,[Validators.required]]
    })
  }
  delete(id: any) {
    this._userservice.delete(id).subscribe((data => { }))
    this._viewService.view().subscribe(data=>{
      this.data=data.data
    });
  }
  editTitle(id:any,title:any){
    this._userservice.editTitle(id,title).subscribe((data)=>{console.log(data)})
    this._viewService.view().subscribe(data=>{
      this.data=data
    })
  }
}
