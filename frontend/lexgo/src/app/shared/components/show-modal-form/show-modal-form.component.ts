import { Component } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter/emitter.service';

@Component({
  selector: 'app-show-modal-form',
  templateUrl: './show-modal-form.component.html',
  styleUrls: ['./show-modal-form.component.scss']
})
export class ShowModalFormComponent {

  constructor(private emitter:EmitterService){}

  sendModalRequired(){
    this.emitter.addOrEditEmployee.emit("add")
  }
}
