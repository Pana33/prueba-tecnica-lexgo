import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasDetailsEmployeeComponent } from './offcanvas-details-employee.component';

describe('OffcanvasDetailsEmployeeComponent', () => {
  let component: OffcanvasDetailsEmployeeComponent;
  let fixture: ComponentFixture<OffcanvasDetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasDetailsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
