import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddFormComponent } from './button-add-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ButtonAddFormComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    ButtonAddFormComponent,
  ]
})
export class ButtonAddFormModule { }
