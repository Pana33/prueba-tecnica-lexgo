import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { IDepartments } from 'src/app/shared/models/i-departments';
import { IParamsFilter } from 'src/app/shared/models/i-params-filter';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  columns:string[] = ["Departamento","Lider","Acciones"]
  keys:string[] = ["name","bossName"]
  departments!:IDepartments[]
  departmentsComplet!:IDepartments[]
  subEmitter!:Subscription

  constructor(private db:DatabaseService,private emitter:EmitterService){}

  ngOnInit(): void {
    this.db.getAllDepartments().pipe(take(1)).subscribe(resEmp=>{
      console.log(resEmp)
      this.departments = resEmp as IDepartments[]
      this.departmentsComplet = resEmp as IDepartments[]
    })
    this.subEmitter = this.emitter.modifyTableEmployees.subscribe(id=>{
      let index = this.departments.findIndex(element => element._id === id)
      this.departments.splice(index,1)
      index = this.departmentsComplet.findIndex(element => element._id === id)
      this.departmentsComplet.splice(index,1)
    })
  }

  filterData(params:IParamsFilter){
    if(params.key === "none" || params.text === ""){
      this.departments = this.departmentsComplet
    }else{
      this.departments = this.departments.filter((employee:IDepartments) => {
        return String(employee[params.key as keyof IDepartments]).toLocaleLowerCase().includes(params.text.toLocaleLowerCase())
      })
    }
  }

  ngOnDestroy(): void {
    this.subEmitter?.unsubscribe()
  }

}
