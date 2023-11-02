import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from '../departments.component';
import { TableDepartmentsComponent } from '../components/table-departments/table-departments.component';
import { ButtonsTableDepartmentsComponent } from '../components/buttons-table-departments/buttons-table-departments.component';
import { ButtonAddFormModule } from 'src/app/shared/components/button-add-form/button-add-form.module';
import { FormFilterModule } from 'src/app/shared/components/form-filter/form-filter.module';


@NgModule({
  declarations: [
    DepartmentsComponent,
    TableDepartmentsComponent,
    ButtonsTableDepartmentsComponent,
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    ButtonAddFormModule,
    FormFilterModule,
  ]
})
export class DepartmentsModule { }
