import { Component } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public api: ApiServiceService) { }
  loginForm:any;

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(''),
      password: new FormControl(''),
    })
  }
  submit() {
    this.api.AdminCheckLogin(this.loginForm.values).subscribe((res: any) => {
      console.log(res,"Login Successfully")

    })
  }
}
