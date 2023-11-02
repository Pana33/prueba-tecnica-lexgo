import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from '../add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddModule { }
