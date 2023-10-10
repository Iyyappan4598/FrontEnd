import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-doctor-data',
  templateUrl: './edit-doctor-data.component.html',
  styleUrls: ['./edit-doctor-data.component.css']
})
export class EditdoctordataComponent implements OnInit{
  constructor(public api:ApiServiceService, public route: ActivatedRoute) { }
  updateForm:any
  doctor:any

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
  }

  doctorDataSpecific:any
    getAnyDoctor(id:any){
      this.api.SpecificDoctor(id).subscribe((res: any)=>{
        this.doctorDataSpecific = res[0];
        console.log(this.doctorDataSpecific, "this.doctorDataSpecific")
      })
    }

  update(){

  }
}
