import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowModalFormComponent } from './show-modal-form.component';



@NgModule({
  declarations: [
    ShowModalFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShowModalFormComponent,
  ]
})
export class ShowModalFormModule { }
