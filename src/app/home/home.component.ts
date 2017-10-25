import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ViewService } from '../view/view.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: any;
  constructor(
    public _router: Router,
    private _viewService: ViewService,
    private _userService: UserService
  ) {
  }
  ngOnInit() {
    this.view().subscribe(data =>
      this.data = data.data.reverse()
    )
    this._userService.register(data => { console.log(data) })
  }
  view() {
    return this._viewService.view();
  }
  take() {
    this._viewService.view();
  }
  logout() {
    this._userService.logout();
  }
}
