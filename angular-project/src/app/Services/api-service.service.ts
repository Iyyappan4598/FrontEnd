import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  submitDoctor(data:any){
    return this.http.post("http://localhost:3000/doctor/user", data)
  }
  doctorDetails(){
    return this.http.get("http://localhost:3000/get/doctor/data")
  }
}
