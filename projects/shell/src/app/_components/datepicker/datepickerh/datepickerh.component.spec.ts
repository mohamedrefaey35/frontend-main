import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerhComponent } from './datepickerh.component';

describe('DatepickerhComponent', () => {
  let component: DatepickerhComponent;
  let fixture: ComponentFixture<DatepickerhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
