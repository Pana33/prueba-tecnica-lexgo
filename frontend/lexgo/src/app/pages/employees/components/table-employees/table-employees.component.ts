import { Component, Input } from '@angular/core';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.scss']
})
export class TableEmployeesComponent {
  @Input() columns!:string[]
  @Input() keys!:string[]
  @Input() employeesData!:IEmployees[]
}
