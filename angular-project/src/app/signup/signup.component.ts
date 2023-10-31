import { Component } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public api: ApiServiceService, private snackBar: MatSnackBar) { }
  adminForm:any;

  //User Login Field (Schema) Name 
  ngOnInit() {
    this.adminForm = new FormGroup({
      Name: new FormControl(''),
      Age: new FormControl(''),
      Email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  submit() {
    this.api.AdminLogin(this.adminForm.value).subscribe((res: any) => {
      this.showSuccessMessage('Registration successful');
    })
  }

  private showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration for which the message is displayed (in milliseconds)
      panelClass: ['success-snackbar'], // CSS class for styling
    });
  }
  
}
