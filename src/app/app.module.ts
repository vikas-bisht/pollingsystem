import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'ngx-progress-bar';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { TakeComponent } from './take/take.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { ViewService } from './view/view.service';
import { LoaderService } from './loader.service';
import { DisplayErrorComponent } from './display-error/display-error.component';

@NgModule({
  declarations: [
    AppComponent, RegisterComponent, LoginComponent, HomeComponent, CreateComponent,ViewComponent, TakeComponent, DisplayErrorComponent
  ],
  imports: [
    MyDatePickerModule,ProgressBarModule, NglModule, BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule, HttpModule
  ],
  entryComponents: [RegisterComponent],
  providers: [LoaderService,ViewService, UserService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
