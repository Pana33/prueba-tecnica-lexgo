import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EPathRoutes } from 'src/app/shared/models/e-path-routes';
import { IDepartments } from 'src/app/shared/models/i-departments';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-add',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent  implements OnInit{

  constructor(private db:DatabaseService,private fb:FormBuilder,private activeRoute:ActivatedRoute,private router:Router){}

  tittleModal:string = ""
  typeDocument:string = ""
  action:string = ""
  departments!:IDepartments[]
  formAddEmployee!:FormGroup
  showSpinner:boolean = false
  employee:IEmployees | null = null

  ngOnInit(): void {
    this.db.getAllDepartments().pipe(take(1)).subscribe(resDep=>{
      this.departments = resDep as IDepartments[]
    })
    this.formAddEmployee = this.fb.group({
      name:["",Validators.required],
      departmentId:["",Validators.required]
    })
    this.setGlobalVariables()
  }

  setGlobalVariables(){
    this.typeDocument = this.activeRoute.snapshot.params["typeDocument"]
    this.action = this.activeRoute.snapshot.params["action"]
    if(this.action === "add"){
      this.tittleModal = "Agregar registro"
    }else{
      this.findAndSetDocument(this.typeDocument,this.action)
      this.tittleModal = "Editar registro"
    }
  }

  findAndSetDocument(typeDocument:string,id:string){
    this.db.getOneDocument(typeDocument,id).pipe(take(1)).subscribe(resDoc=>{
      this.employee = resDoc as IEmployees
      this.formAddEmployee.patchValue({"name":this.employee.name})
      this.formAddEmployee.patchValue({"departmentId":this.employee.departmentId})
    })
  }

  sendForm(){
    if(this.formAddEmployee.invalid){
      return
    }
    this.showSpinner = true
    if(this.employee === null){
      this.db.addEmployee(this.formAddEmployee.value.name,this.formAddEmployee.value.departmentId).pipe(take(1)).subscribe(resAdd=>{
        this.router.navigate([this.typeDocument])
      })
    }else{
      this.db.editEmployee(this.employee._id,this.formAddEmployee.value.name,this.formAddEmployee.value.departmentId).pipe(take(1)).subscribe(resEdit=>{
        this.router.navigate([this.typeDocument])
      })
    }
  }

}
