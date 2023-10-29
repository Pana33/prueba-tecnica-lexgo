import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { TableEmployeesComponent } from './pages/employees/components/table-employees/table-employees.component';
import { ButtonsTableEmployeesComponent } from './pages/employees/components/buttons-table-employees/buttons-table-employees.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
