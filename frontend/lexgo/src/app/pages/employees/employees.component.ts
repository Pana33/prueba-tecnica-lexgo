import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  columns:string[] = ["Nombre","Departamento","Rol","Acciones"]
  keys:string[] = ["name","nameDepartment","rol"]
  employees!:IEmployees[]
  subEmitter!:Subscription

  constructor(private db:DatabaseService,private emitter:EmitterService){}

  ngOnInit(): void {
    this.db.getAllEmployees().pipe(take(1)).subscribe(resEmp=>{
      console.log(resEmp)
      this.employees = resEmp as IEmployees[]
    })
    this.subEmitter = this.emitter.modifyTableEmployees.subscribe(id=>{
      let index = this.employees.findIndex(element => element._id === id)
      this.employees.splice(index,1)
    })
  }

  ngOnDestroy(): void {
    this.subEmitter?.unsubscribe()
  }

}
