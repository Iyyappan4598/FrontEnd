import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  //Post Doctor data store from Frontend to Backend(MongoDB)
  submitDoctor(data: any) {
    return this.http.post("http://localhost:3000/doctor/user", data)
  }

  //get Doctor data from Backend(MongoDB) to Frontend
  doctorDetails() {
    return this.http.get("http://localhost:3000/get/doctor/data")
  }

  //get specific Doctor Data
  SpecificDoctor(id: any) {
    return this.http.get("http://localhost:3000/get/specific/doctor/data/" + id)
  }

  //Delete Doctor Backend(MongoDB) data
  deleteDoctor(id: any) {
    return this.http.delete("http://localhost:3000/delete/Doctor/data/" + id)
  }

  //Edit Specific Doctor data
  EditDoctor(id: any, data: any) {
    return this.http.put("http://localhost:3000/put/edit/Doctor/" + id, data)
  }

  //Post Nurse data store from Frontend to Backend(MongoDB)
  submitNurse(data: any) {
    return this.http.post("http://localhost:3000/nurse/user", data)
  }

  //get Nurse data from Backend(MongoDB) to Frontend
  nurseDetails() {
    return this.http.get("http://localhost:3000/get/Nurse/data")
  }

  //Delete Nurse Backend(MongoDB) data
  deleteNurse(id: any) {
    return this.http.delete("http://localhost:3000/delete/Nurse/data/" + id)
  }

  //get specific Nurse Data
  SpecificNurse(id: any) {
    return this.http.get("http://localhost:3000/get/specific/Nurse/data/" + id)
  }

  //Edit Specific Nurse data
  EditNurse(id: any, data: any) {
    return this.http.put("http://localhost:3000/put/edit/Nurse/" + id, data)
  }
}
