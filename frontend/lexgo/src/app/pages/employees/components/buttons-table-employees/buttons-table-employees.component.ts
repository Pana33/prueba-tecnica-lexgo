import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-buttons-table-employees',
  templateUrl: './buttons-table-employees.component.html',
  styleUrls: ['./buttons-table-employees.component.scss']
})
export class ButtonsTableEmployeesComponent {
  @Input() employee!:IEmployees

  constructor(private db:DatabaseService){}

  deleteEmployee(){
    this.db.deleteEmployee(this.employee._id).subscribe(resDel=>{
      console.log("eliminado")
    })
  }

}
