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

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TableEmployeesComponent,
    ButtonsTableEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    ShowModalFormModule,
    FormFilterModule,
  ],
  providers: [
    DatabaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
