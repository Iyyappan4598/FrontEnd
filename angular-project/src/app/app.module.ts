import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Import HttpClient Module
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { EditdoctordataComponent } from './edit-doctor-data/edit-doctor-data.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UpdateNurseDataComponent } from './update-nurse-data/update-nurse-data.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    DoctorFormComponent,
    EditdoctordataComponent,
    NurseFormComponent,
    PatientFormComponent,
    UpdateNurseDataComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
