import { EventEmitter, Injectable, Output } from '@angular/core';
import { IEmployees } from 'src/app/shared/models/i-employees';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }

  @Output() modifyTableEmployees:EventEmitter<string> = new EventEmitter();
  @Output() showDetails:EventEmitter<IEmployees> = new EventEmitter();

}
