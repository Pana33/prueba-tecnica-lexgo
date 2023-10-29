import { Component, Input } from '@angular/core';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Component({
  selector: 'app-buttons-table-employees',
  templateUrl: './buttons-table-employees.component.html',
  styleUrls: ['./buttons-table-employees.component.scss']
})
export class ButtonsTableEmployeesComponent {
  @Input() employee!:IEmployees
}
