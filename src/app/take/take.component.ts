import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ViewService } from './../view/view.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})

export class TakeComponent {
  data: any;
  voteForm: FormGroup;
  constructor(
    private _viewService: ViewService,
    private _formBuilder: FormBuilder,
    
    private _router: Router
  ) {
   }
  ngOnInit() {
    this._viewService.view().subscribe(data => {
      this.data = data.data
      console.log(this.data)
    })
    this.voteForm = new FormGroup
     ({
       options : new FormControl('', Validators.required)
     })
  }


}
