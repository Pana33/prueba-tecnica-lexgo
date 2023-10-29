import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  columns:string[] = ["Nombre","Departamento","Rol","Acciones"]
  keys:string[] = ["name","name","rol"]
  employees!:[]
}
