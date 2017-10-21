import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatRadioModule} from '@angular/material';


import { UserService } from '../user.service';

@Component({
  selector: 'app-voteForm',
  templateUrl: './voteform.component.html',
  styleUrls: ['./take.component.css']
})

export class VoteFormComponent implements OnInit {
  @Input() formData: any;
  myDate:Date;
  public visible = false;
  voteForm: FormGroup;
  data: any;
  constructor(
    private _userservice: UserService,
  ) {
    this.myDate=new Date()
  }
  ngOnInit() {
    this.voteForm = new FormGroup
      ({
        options: new FormControl('', Validators.required)
      })
      if(this.myDate>this.formData.date){


      }
  }
  vote(id: any, option: any) {
    this._userservice.vote(id, this.voteForm.get('options').value);
    setTimeout(() => {
      this._userservice.summary(id).subscribe((data) => {
        console.log(data.json())
        this.data = data.json();
        this.formData.options = this.data['data'].options;
      });
      console.log(this._userservice.summary(id));
    }, 500)

    this.visible = true;
    this.voteForm.disable();

  }

}
