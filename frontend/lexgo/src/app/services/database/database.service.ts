import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private UrlBackend = "http://localhost:8000/"
  constructor(private http:HttpClient) { }

  getAllEmployees(deparment?:string){
    let query = `${this.UrlBackend}employees`
    if(typeof deparment !== "undefined"){
      query += `?department=${deparment}`
    }
    return this.http.get(query)
  }

  addEmployee(name:string,departmentId:string){
    return this.http.post(`${this.UrlBackend}employee`,{name,departmentId})
  }

  editEmployee(id:string,name:string,departmentId:string){
    return this.http.put(`${this.UrlBackend}employee/${id}`,{name,departmentId})
  }

  deleteEmployee(id:string){
    return this.http.delete(`${this.UrlBackend}employee/${id}`)
  }

  getAllDepartments(){
    return this.http.get(`${this.UrlBackend}departments`)
  }

}
