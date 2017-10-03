import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service'

@Component({
  selector: 'pollingsystem',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showLoader: boolean;
  constructor(
      private _loaderService: LoaderService
  ){}
  ngOnInit(){
    this._loaderService.status.subscribe((val:boolean)=>{
      this.showLoader=val;
    });
  }
}
