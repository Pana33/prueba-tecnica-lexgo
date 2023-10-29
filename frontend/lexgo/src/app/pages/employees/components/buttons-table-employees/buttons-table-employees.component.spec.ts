import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTableEmployeesComponent } from './buttons-table-employees.component';

describe('ButtonsTableEmployeesComponent', () => {
  let component: ButtonsTableEmployeesComponent;
  let fixture: ComponentFixture<ButtonsTableEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsTableEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsTableEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
