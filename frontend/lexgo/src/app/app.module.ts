import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { TableEmployeesComponent } from './pages/employees/components/table-employees/table-employees.component';
import { ButtonsTableEmployeesComponent } from './pages/employees/components/buttons-table-employees/buttons-table-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database/database.service';
import { ShowModalFormModule } from './shared/components/show-modal-form/show-modal-form.module';
import { FormFilterModule } from './shared/components/form-filter/form-filter.module';
import { ModalFormEmployeesComponent } from './pages/employees/components/modal-form-employees/modal-form-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffcanvasDetailsEmployeeComponent } from './pages/employees/components/offcanvas-details-employee/offcanvas-details-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TableEmployeesComponent,
    ButtonsTableEmployeesComponent,
    ModalFormEmployeesComponent,
    OffcanvasDetailsEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShowModalFormModule,
    FormFilterModule,
  ],
  providers: [
    DatabaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
