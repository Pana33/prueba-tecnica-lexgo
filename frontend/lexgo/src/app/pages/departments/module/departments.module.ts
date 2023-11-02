import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from '../departments.component';
import { TableDepartmentsComponent } from '../components/table-departments/table-departments.component';
import { ButtonsTableDepartmentsComponent } from '../components/buttons-table-departments/buttons-table-departments.component';
import { FormFilterModule } from 'src/app/shared/components/form-filter/form-filter.module';
import { OffcanvasDetailsDepartmentComponent } from '../components/offcanvas-details-department/offcanvas-details-department.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    TableDepartmentsComponent,
    ButtonsTableDepartmentsComponent,
    OffcanvasDetailsDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormFilterModule,
  ]
})
export class DepartmentsModule { }
