import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-offcanvas-details-employee',
  templateUrl: './offcanvas-details-employee.component.html',
  styleUrls: ['./offcanvas-details-employee.component.scss']
})
export class OffcanvasDetailsEmployeeComponent implements OnInit, OnDestroy{

  constructor(private emitter:EmitterService,private db:DatabaseService){}

  employee:IEmployees | null = null
  employesByDepartment:IEmployees[] | null = null
  subEmitter!:Subscription

  ngOnInit(): void {
    this.emitter.showDetails.subscribe(employee=>{
      this.employee = employee
      if(employee._id === employee.bossId){
        this.db.getAllEmployees(employee.departmentId).pipe(take(1)).subscribe(resEmps=>{
          this.employesByDepartment = resEmps as IEmployees[]
          console.log(resEmps)
        })
      }else{
        this.employesByDepartment = null
      }
    })
  }

  ngOnDestroy(): void {
    this.subEmitter?.unsubscribe()
  }

}
