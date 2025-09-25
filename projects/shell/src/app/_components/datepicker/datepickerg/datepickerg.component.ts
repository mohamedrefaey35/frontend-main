import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDatepickerConfig  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepickerg',
  templateUrl: './datepickerg.component.html',
  styleUrls: ['./datepickerg.component.css']
})
export class DatepickergComponent implements OnInit {
  model!: NgbDateStruct;
  constructor(private calendar: NgbCalendar) { }
  isDisabled = (date: NgbDate, current: { month: number; year: number }) => date.month !== current.month;
	isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  ngOnInit(): void {
  }

}
