import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasDetailsDepartmentComponent } from './offcanvas-details-department.component';

describe('OffcanvasDetailsDepartmentComponent', () => {
  let component: OffcanvasDetailsDepartmentComponent;
  let fixture: ComponentFixture<OffcanvasDetailsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasDetailsDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasDetailsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
