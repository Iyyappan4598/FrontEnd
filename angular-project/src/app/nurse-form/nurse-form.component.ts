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

  ngOnInit() {
    this.nurseForm = new FormGroup({
      EmpId: new FormControl(),
      Name: new FormControl(),
      Mobile: new FormControl(),
      Jobrole: new FormControl(),
      sallery: new FormControl(),
      location: new FormControl()

    })
  }
  value: any
  submit() {
    this.api.submitNurse(this.nurseForm.value).subscribe((res: any) => {
      this.value = res;
    })
  }
}
