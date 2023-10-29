import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTableDepartmentsComponent } from './buttons-table-departments.component';

describe('ButtonsTableDepartmentsComponent', () => {
  let component: ButtonsTableDepartmentsComponent;
  let fixture: ComponentFixture<ButtonsTableDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsTableDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsTableDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
