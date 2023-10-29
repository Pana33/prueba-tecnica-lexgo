import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModalFormComponent } from './show-modal-form.component';

describe('ShowModalFormComponent', () => {
  let component: ShowModalFormComponent;
  let fixture: ComponentFixture<ShowModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
