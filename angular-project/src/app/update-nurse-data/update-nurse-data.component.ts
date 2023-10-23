import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-nurse-data',
  templateUrl: './update-nurse-data.component.html',
  styleUrls: ['./update-nurse-data.component.css']
})
export class UpdateNurseDataComponent {
  constructor(public api:ApiServiceService, public route: ActivatedRoute, public router: Router) { }
  UpdateNurseForm:any
  nurse:any
  
//Nurse Field (Schema) Name
ngOnInit() {
  this.UpdateNurseForm = new FormGroup({
    EmpId: new FormControl(),
    Name: new FormControl(),
    mobile: new FormControl(),
    salary: new FormControl(),
    location: new FormControl()
  })

  this.route.queryParams.subscribe((res: any)=>{
    this.nurse= res.NurseId;
    console.log(this.nurse);
  })    
  this.getAnynurse(this.nurse)
}
nurseDataSpecific:any
    getAnynurse(id:any){
      this.api.SpecificNurse(this.nurse).subscribe((res: any)=>{
        this.nurseDataSpecific = res[0];

        this.UpdateNurseForm.patchValue({
          EmpId:this.nurseDataSpecific.EmpId,
          Name: this.nurseDataSpecific.Name,
          mobile: this.nurseDataSpecific.mobile,
          salary: this.nurseDataSpecific.salary,
          location:this.nurseDataSpecific.location

        })
        console.log(this.UpdateNurseForm, "this.UpdateNurseForm")
      })
    }

    update(){
    this.api.EditNurse(this.nurse, this.UpdateNurseForm.value).subscribe((res: any) => {
      this.router.navigate(["../NurseForm"]);
    })    
  }

}

