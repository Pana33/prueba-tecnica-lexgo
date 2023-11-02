import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddFormComponent } from './button-add-form.component';


@NgModule({
  declarations: [
    ButtonAddFormComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonAddFormComponent,
  ]
})
export class ButtonAddFormModule { }
