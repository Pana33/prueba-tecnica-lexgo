import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormEmployeesComponent } from './modal-form-employees.component';

describe('ModalFormEmployeesComponent', () => {
  let component: ModalFormEmployeesComponent;
  let fixture: ComponentFixture<ModalFormEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
