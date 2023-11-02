import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { EPathRoutes } from 'src/app/shared/models/e-path-routes';
import { IDepartments } from 'src/app/shared/models/i-departments';

@Component({
  selector: 'app-buttons-table-departments',
  templateUrl: './buttons-table-departments.component.html',
  styleUrls: ['./buttons-table-departments.component.scss']
})
export class ButtonsTableDepartmentsComponent {
  @Input() department!:IDepartments

  readonly pages = EPathRoutes

  constructor(private db:DatabaseService,private emitter:EmitterService){}

  showDetailsEmployee(){
    this.emitter.showDetails.emit(this.department)
  }

  deleteDepartment(){
    this.db.deleteEmployee(this.department._id).subscribe(resDel=>{
      this.emitter.modifyTableEmployees.emit(this.department._id)
    })
  }

}
