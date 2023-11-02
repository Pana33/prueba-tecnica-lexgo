import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddFormComponent } from './button-add-form.component';

describe('ButtonAddFormComponent', () => {
  let component: ButtonAddFormComponent;
  let fixture: ComponentFixture<ButtonAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
