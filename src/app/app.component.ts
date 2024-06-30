import { Component } from '@angular/core';
import { DateFormatterPipe } from '../pipes/date-formatter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentDate: string | Date = new Date();
  value1: string = 'ქონება';
  value2: string[] = [
    'ქონება',
    'ქონების პრივატიზება',
    'ქონების გასხვისება',
    'საქონლის გასხვისება',
  ];
  title = 'software-second';
}
