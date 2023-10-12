import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import Doctor Form
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
//Import Register Form
import { RegisterFormComponent } from './register-form/register-form.component';
//Import Login
import { LoginComponent } from './login/login.component';
//Import Update Doctor Form
import { EditdoctordataComponent } from './edit-doctor-data/edit-doctor-data.component';
//Import Nurse Form
import { NurseFormComponent } from './nurse-form/nurse-form.component';

const routes: Routes = [
  //Doctor Post Delete Get Put Method
  {
    path: "DoctorFormComponent", component: DoctorFormComponent
  },
  {
    path: "RegisterFormComponent", component: RegisterFormComponent
  },
  {
    path: "LoginComponent", component: LoginComponent
  },
  {
    path: "EditDoctor", component: EditdoctordataComponent
  },

  //Nurse Post Delete Get Put Method
  {
    path: "NurseForm", component: NurseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
