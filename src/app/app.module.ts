import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProgressBarModule} from 'ngx-progress-bar';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { LoaderService } from './loader.service';
import { DisplayErrorComponent } from './display-error/display-error.component';

@NgModule({
  declarations: [
    AppComponent,RegisterComponent,LoginComponent,DisplayErrorComponent
  ],
  imports: [
    ProgressBarModule,NglModule,BrowserModule, ReactiveFormsModule ,FormsModule, AppRoutingModule, HttpModule
  ],
  entryComponents: [ RegisterComponent ],
  providers: [LoaderService,UserService,{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
