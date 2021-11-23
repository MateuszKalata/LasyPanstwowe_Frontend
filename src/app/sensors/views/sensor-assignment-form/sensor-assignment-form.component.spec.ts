import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorAssignmentFormComponent } from './sensor-assignment-form.component';

describe('SensorAssignmentFormComponent', () => {
  let component: SensorAssignmentFormComponent;
  let fixture: ComponentFixture<SensorAssignmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorAssignmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
