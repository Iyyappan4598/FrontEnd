import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-DoctorRegister-form',
  templateUrl: './DoctorRegister-form.component.html',
  styleUrls: ['./DoctorRegister-form.component.css']
})
export class RegisterFormComponent {

  doctorForm:any;
  ngOnInit(){

    this.doctorForm = new FormGroup({
      Name: new FormControl(),
      mobile: new FormControl(),
      department: new FormControl(),
      sallery: new FormControl(),
      location: new FormControl()
    })
  }
  submit(){
    // console.log("works")
    console.log(this.doctorForm.value)
  }
}
