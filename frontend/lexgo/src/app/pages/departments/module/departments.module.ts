import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from '../departments.component';
import { TableDepartmentsComponent } from '../components/table-departments/table-departments.component';
import { ButtonsTableDepartmentsComponent } from '../components/buttons-table-departments/buttons-table-departments.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    TableDepartmentsComponent,
    ButtonsTableDepartmentsComponent,
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
