import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.css']
})

export class NurseFormComponent {
  constructor(public api: ApiServiceService) { }

  nurseForm: any;

  //Nurse Field (Schema) Name
  ngOnInit() {
    this.nurseForm = new FormGroup({
      EmpId: new FormControl(),
      Name: new FormControl(),
      mobile: new FormControl(),
      Jobrole: new FormControl(),
      sallery: new FormControl(),
      location: new FormControl()
    })
    this.getnursedetails();
  }

  submit() {
    this.api.submitNurse(this.nurseForm.value).subscribe((res: any) => {
      this.getnursedetails();
    })
  }

  //Get Nurse Full Data
  value: any
  getnursedetails() {
    this.api.nurseDetails().subscribe((res: any) => {
      this.value = res;
    })
  }

  //Delete Nurse Specific Data using id
  deleteNurseData(id: any) {
    this.api.deleteNurse(id).subscribe((res: any) => {
    })
  }
}
