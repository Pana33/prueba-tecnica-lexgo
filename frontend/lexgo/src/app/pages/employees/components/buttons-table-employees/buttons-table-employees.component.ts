import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-buttons-table-employees',
  templateUrl: './buttons-table-employees.component.html',
  styleUrls: ['./buttons-table-employees.component.scss']
})
export class ButtonsTableEmployeesComponent {
  @Input() employee!:IEmployees

  constructor(private db:DatabaseService,private emitter:EmitterService){}

  sendEmpleadoToModal(){
    this.emitter.addOrEditEmployee.emit(this.employee)
  }

  deleteEmployee(){
    this.db.deleteEmployee(this.employee._id).subscribe(resDel=>{
      this.emitter.modifyTableEmployees.emit(this.employee._id)
    })
  }

}
