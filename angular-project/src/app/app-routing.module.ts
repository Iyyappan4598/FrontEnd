import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import Doctor Form
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
//Import Register Form
import { RegisterFormComponent } from './register-form/register-form.component';
//Import Login
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "DoctorFormComponent", component: DoctorFormComponent
  },
  {
    path: "RegisterFormComponent", component: RegisterFormComponent
  },
  {
    path:"LoginComponent", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
