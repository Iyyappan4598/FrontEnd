import { Component } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: any;
  constructor(public api: ApiServiceService) { }
  loginForm: any;
  token: any;

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(''),
      password: new FormControl(''),
    })
  }
  getToken: any;
  submit() {
    this.api.AdminCheckLogin(this.loginForm.value).subscribe((res: any) => {
      // console.log(res,"Login Successfully")
      this.token = res.message;
      sessionStorage.setItem('token', this.token)
      this.getToken = sessionStorage.getItem('token');
      if (this.getToken == "undefined") {
        console.log("Incorrect")
      } else {
        this.router.navigate(['../DoctorFormComponent'])
      }

    })
  }
}
