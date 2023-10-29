import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private UrlBackend = "http://localhost:8827/employees"
  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.UrlBackend)
  }

  

}
