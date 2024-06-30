import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  daysInMonth: number[];
  weekdays: string[];
  firstDayIndex: number;

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.currentDate = today.getDate();
    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    this.firstDayIndex = firstDay.getDay();
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const lastDate = lastDay.getDate();

    this.daysInMonth = Array.from({ length: lastDate }, (_, i) => i + 1);
  }
}
