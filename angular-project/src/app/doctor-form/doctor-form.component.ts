import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent {
  constructor(public api: ApiServiceService) { }

  doctorForm: any;

  //Doctor Field (Schema) Name 
  ngOnInit() {
    this.doctorForm = new FormGroup({
      Name: new FormControl(),
      mobile: new FormControl(),
      department: new FormControl(),
      sallery: new FormControl(),
      location: new FormControl()
    })
    this.getDoctorDetails();
  }

  submit() {
    this.api.submitDoctor(this.doctorForm.value).subscribe((res: any) => {
      this.getDoctorDetails();
    })
  }
  //Get Docotor Full Data
  data: any
  getDoctorDetails() {
    this.api.doctorDetails().subscribe((res: any) => {
      this.data = res;
    })
  }
  //Delete Doctor Specific Data using id
  deleteDoctorData(id: any) {
    this.api.deleteDoctor(id).subscribe((res: any) => {
    })
  }
}
