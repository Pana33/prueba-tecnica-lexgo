import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { IDepartments } from 'src/app/shared/models/i-departments';

@Component({
  selector: 'app-modal-form-employees',
  templateUrl: './modal-form-employees.component.html',
  styleUrls: ['./modal-form-employees.component.scss']
})
export class ModalFormEmployeesComponent implements OnInit{

  constructor(private db:DatabaseService,private fb:FormBuilder){}

  departments!:IDepartments[]
  formAddEmployee!:FormGroup
  showSpinner:boolean = false

  ngOnInit(): void {
    this.db.getAllDepartments().pipe(take(1)).subscribe(resDep=>{
      this.departments = resDep as IDepartments[]
      console.log(resDep)
    })
    this.formAddEmployee = this.fb.group({
      name:["",Validators.required],
      departmentId:["",Validators.required]
    })
  }

  sendForm(){
    if(this.formAddEmployee.invalid){
      return
    }
    this.showSpinner = true
    this.db.addEmployee(this.formAddEmployee.value.name,this.formAddEmployee.value.departmentId).pipe(take(1)).subscribe(resAdd=>{
      this.showSpinner = false
    })
  }

}
