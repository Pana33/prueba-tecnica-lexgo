import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { IDepartments } from 'src/app/shared/models/i-departments';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-offcanvas-details-department',
  templateUrl: './offcanvas-details-department.component.html',
  styleUrls: ['./offcanvas-details-department.component.scss']
})
export class OffcanvasDetailsDepartmentComponent implements OnInit, OnDestroy{

  constructor(private emitter:EmitterService,private db:DatabaseService){}

  department:IDepartments | null = null
  employeesOfDepartment:IEmployees[] | null = null
  subEmitter!:Subscription

  ngOnInit(): void {
    this.emitter.showDetails.subscribe((department:IDepartments)=>{
      this.department = department
      this.employeesOfDepartment = []
      this.db.getAllEmployees(department._id).pipe(take(1)).subscribe(resEmps=>{
        this.employeesOfDepartment = resEmps as IEmployees[]
      })
    })
  }

  ngOnDestroy(): void {
    this.subEmitter?.unsubscribe()
  }

}
