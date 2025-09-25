import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n, NgbDate} from '@ng-bootstrap/ng-bootstrap';
const WEEKDAYS = ['س', 'ج', 'خ', 'ر', 'ث', 'ن', 'ح'];
const MONTHS = [
	'محرم',
	'صفر',
	'ربيع الأول',
	'ربيع الآخر',
	'جماد الأول',
	'جماد الآخر',
	'رجب',
	'شعبان',
	'رمضان',
	'شوال',
	'ذو القعدة',
	'ذو الحجة',
];
@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
	getMonthShortName(month: number) {
		return MONTHS[month - 1];
	}

	getMonthFullName(month: number) {
		return MONTHS[month - 1];
	}

	getWeekdayLabel(weekday: number) {
		return WEEKDAYS[weekday - 1];
	}

	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}
}

@Component({
  selector: 'app-datepickerh',
  templateUrl: './datepickerh.component.html',
  styleUrls: ['./datepickerh.component.css'],
  providers: [
		{ provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
		{ provide: NgbDatepickerI18n, useClass: IslamicI18n },
	],
})
export class DatepickerhComponent implements OnInit {

  model!: NgbDateStruct;
  constructor(private calendar: NgbCalendar) { }
  isDisabled = (date: NgbDate, current: { month: number; year: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) <= 2;
  selectToday() {
		this.model = this.calendar.getToday();
	}
  
  ngOnInit(): void {
  }

}
