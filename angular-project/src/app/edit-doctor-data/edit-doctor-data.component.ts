import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-doctor-data',
  templateUrl: './edit-doctor-data.component.html',
  styleUrls: ['./edit-doctor-data.component.css']
})
export class EditdoctordataComponent implements OnInit{
  constructor(public api:ApiServiceService, public route: ActivatedRoute, public router: Router) { }
  updateForm:any
  doctor:any

  //Doctor Field (Schema) Name
  ngOnInit(){
    this.updateForm = new FormGroup({
      Name: new FormControl(),
      mobile: new FormControl(),
      department: new FormControl(),
      sallery: new FormControl(),
      location: new FormControl()
    })

    this.route.queryParams.subscribe((res: any)=>{
      this.doctor= res.doctorId;
      console.log(this.doctor);
    })    
    this.getAnyDoctor(this.doctor)
  }

  doctorDataSpecific:any
    getAnyDoctor(id:any){
      this.api.SpecificDoctor(this.doctor).subscribe((res: any)=>{
        this.doctorDataSpecific = res[0];

        this.updateForm.patchValue({
          Name: this.doctorDataSpecific.Name,
          mobile: this.doctorDataSpecific.mobile,
          department: this.doctorDataSpecific.department,
          sallery: this.doctorDataSpecific.sallery,
          location:this.doctorDataSpecific.location

        })
        console.log(this.doctorDataSpecific, "this.doctorDataSpecific")
      })
    }

  update(){
    this.api.EditDoctor(this.doctor, this.updateForm.value).subscribe((res: any) => {
      this.router.navigate(["../DoctorFormComponent"]);
    })    
  }
}
