import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  //Post data store from Frontend to Backend(MongoDB)
  submitDoctor(data:any){
    return this.http.post("http://localhost:3000/doctor/user", data)
  }

  //get data from Backend(MongoDB) to Frontend
  doctorDetails(){
    return this.http.get("http://localhost:3000/get/doctor/data")
  }

  //get specific Data
  SpecificDoctor(id: any) {
    return this.http.get("http://localhost:3000/get/specific/doctor/data/"+id)
  }

  //Delete Backend(MongoDB) data
  deleteDoctor(id:any){
    return this.http.delete("http://localhost:3000/delete/Doctor/data/"+id)
  }  
  
  //Edit Specific Doctor data
  EditDoctor(id:any ,data:any){
    return this.http.put("http://localhost:3000/put/edit/Doctor/"+id, data)
  }
}
