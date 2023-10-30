import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { IEmployees } from 'src/app/shared/models/i-employees';
import { IParamsFilter } from 'src/app/shared/models/i-params-filter';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  columns:string[] = ["Nombre","Departamento","Rol","Acciones"]
  keys:string[] = ["name","nameDepartment","rol"]
  nameKeysFilter:string[] = ["Nombre","Departamento"]
  keysFilter:string[] = ["name","nameDepartment"]
  employees!:IEmployees[]
  employeesComplet!:IEmployees[]
  subEmitter!:Subscription

  constructor(private db:DatabaseService,private emitter:EmitterService){}

  ngOnInit(): void {
    this.db.getAllEmployees().pipe(take(1)).subscribe(resEmp=>{
      console.log(resEmp)
      this.employees = resEmp as IEmployees[]
      this.employeesComplet = resEmp as IEmployees[]
    })
    this.subEmitter = this.emitter.modifyTableEmployees.subscribe(id=>{
      let index = this.employees.findIndex(element => element._id === id)
      this.employees.splice(index,1)
      index = this.employeesComplet.findIndex(element => element._id === id)
      this.employeesComplet.splice(index,1)
    })
  }

  filterData(params:IParamsFilter){
    if(params.key === "none" || params.text === ""){
      this.employees = this.employeesComplet
    }else{
      this.employees = this.employees.filter((employee:IEmployees) => {
        return String(employee[params.key as keyof IEmployees]).toLocaleLowerCase().includes(params.text.toLocaleLowerCase())
      })
    }
  }

  ngOnDestroy(): void {
    this.subEmitter?.unsubscribe()
  }

}
