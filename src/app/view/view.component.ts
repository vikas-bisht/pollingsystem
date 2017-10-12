import { Component, OnInit } from '@angular/core';

import { ViewService } from './view.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  data: any;

  constructor(
    private _viewService: ViewService,
    private _userservice: UserService
  ) {
  }
  ngOnInit() {
    this._viewService.view().subscribe(data => {
      this.data = data.data
    });
  }
  delete(id: any) {
    this._userservice.delete(id).subscribe((data => { }))
    this._viewService.view().subscribe(data=>{
      this.data=data.data
    });
  }
}
