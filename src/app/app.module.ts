import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'ngx-progress-bar';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-modal'
import { MyDatePickerModule } from 'mydatepicker';
import { MomentModule } from 'angular2-moment';
import {MatRadioModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

import { TakeComponent } from './take/take.component';
import { VoteFormComponent } from './take/voteform.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { ViewService } from './view/view.service';
//import { AuthGuard } from './auth.guard';
import { DisplayErrorComponent } from './display-error/display-error.component';

@NgModule({
  declarations: [
    AppComponent, RegisterComponent, LoginComponent, HomeComponent,VoteFormComponent, CreateComponent,ViewComponent, TakeComponent, DisplayErrorComponent
  ],
  imports: [
    MyDatePickerModule,MatRadioModule ,MomentModule ,ModalModule,ProgressBarModule, NglModule, BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule, HttpModule
  ],
  entryComponents: [RegisterComponent],
  providers: [ViewService, UserService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
