import { Component, OnInit } from '@angular/core';

import { ViewService } from './view.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  data: any;

  constructor(
    private _viewService: ViewService
  ) {
  }
  ngOnInit() {
    this._viewService.view().subscribe(data => {
    this.data = data.data
      console.log(this.data.data)
    });
  }
}
