import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IParamsFilter } from '../../models/i-params-filter';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit{
  @Input() keys!:string[]
  @Input() nameKeys!:string[]
  @Output() parameters = new EventEmitter<IParamsFilter>

  constructor(private fb:FormBuilder){}

  formParams!:FormGroup

  ngOnInit(): void {
    this.formParams = this.fb.group({
      text:[""],
      key:["none"],
    })
  }

  sendParams(){
    this.parameters.emit(this.formParams.value as IParamsFilter)
  }

}
