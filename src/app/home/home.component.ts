import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ViewService } from '../view/view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private _router:Router,
    private _viewService: ViewService
  ) {

  }
  ngOnInit() { }
  view() {
    this._viewService.view();
  }
  take(){
    this._viewService.view();
  }
}
