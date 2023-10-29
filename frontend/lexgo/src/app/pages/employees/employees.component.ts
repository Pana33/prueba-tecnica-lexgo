import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  columns:string[] = ["Nombre","Departamento","Rol","Acciones"]
  keys:string[] = ["name","nameDepartment","rol"]
  employees!:IEmployees[]

  constructor(private db:DatabaseService){}

  ngOnInit(): void {
    this.db.getAllEmployees().subscribe(resEmp=>{
      console.log(resEmp)
      this.employees = resEmp as IEmployees[]
    })
  }

}
