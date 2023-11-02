import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-departments',
  templateUrl: './table-departments.component.html',
  styleUrls: ['./table-departments.component.scss']
})
export class TableDepartmentsComponent {
  @Input() columns!:string[]
  @Input() keys!:string[]
  @Input() departmentsData!:any[]
}
