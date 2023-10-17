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
//Import UPdate Nurse Form
import {UpdateNurseDataComponent} from './update-nurse-data/update-nurse-data.component';

const routes: Routes = [
  //Create Doctor Form
  {
    path: "DoctorFormComponent", component: DoctorFormComponent
  },
  //Create Register Form
  {
    path: "RegisterFormComponent", component: RegisterFormComponent
  },
  //Create Login Form
  {
    path: "LoginComponent", component: LoginComponent
  },

  //Update Doctor Form
  {
    path: "EditDoctor", component: EditdoctordataComponent
  },

  //Create Nurse Form
  {
    path: "NurseForm", component: NurseFormComponent
  },
  //Update Nurse Form
  {
    path:"UpdateNurse", component:UpdateNurseDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
