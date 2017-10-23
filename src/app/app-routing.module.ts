import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard } from './auth.guard'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { TakeComponent } from './take/take.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'view', component: ViewComponent },
      { path: 'take', component: TakeComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
