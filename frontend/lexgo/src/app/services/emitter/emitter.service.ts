import { EventEmitter, Injectable, Output } from '@angular/core';
import { IDepartments } from 'src/app/shared/models/i-departments';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }

  @Output() modifyTableEmployees:EventEmitter<string> = new EventEmitter();
  @Output() showDetails:EventEmitter<IEmployees | IDepartments> = new EventEmitter();

}
