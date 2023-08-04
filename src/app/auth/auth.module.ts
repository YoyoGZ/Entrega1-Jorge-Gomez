import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component' ;
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule,
  ]
})
export class AuthModule { }
