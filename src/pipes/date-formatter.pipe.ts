import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatter',
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: any): any {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(date, 'HH:mm:ss MMM dd yyyy');
    }

    return value;
  }
}
