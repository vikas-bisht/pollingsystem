import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import {ProgressBarModule} from 'ngx-progress-bar';
import { NglModule } from 'ng-lightning/ng-lightning';

@Component({
  selector: 'pollingsystem',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  objLoaderStatus: boolean;
  constructor(
      private _loaderService: LoaderService)
      {this.objLoaderStatus= false}
  ngOnInit(){
    this._loaderService.loaderStatus.subscribe((val:boolean)=>{
    this.objLoaderStatus=val;
      console.log(val);
    });
  }
}
