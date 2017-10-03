import { Component, OnInit } from '@angular/core';

import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent {
  message: any;
  constructor(private _alertService: AlertService){}
  ngOnInit(){
    this._alertService.getMessage().subscribe(message=>{
      this.message =message;
    });
  }
}
