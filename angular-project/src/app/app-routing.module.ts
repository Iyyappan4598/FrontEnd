import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './DoctorRegister-form/DoctorRegister-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: "RegisterFormComponent", component: RegisterFormComponent
  },
  {
    path: "LoginComponent", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
