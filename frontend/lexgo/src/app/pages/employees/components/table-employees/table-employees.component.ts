import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.scss']
})
export class TableEmployeesComponent {
  @Input() columns!:string[]
  @Input() keys!:string[]
  @Input() employeesData!:any[]
}
