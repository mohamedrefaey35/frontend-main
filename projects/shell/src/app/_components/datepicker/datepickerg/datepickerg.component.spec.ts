import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickergComponent } from './datepickerg.component';

describe('DatepickergComponent', () => {
  let component: DatepickergComponent;
  let fixture: ComponentFixture<DatepickergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickergComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
