import { Component, computed, output, signal } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';

import { CalendarMonths } from '@Types/calendar.type';

@Component({
  selector: 'fortes-datapicker',
  imports: [NgOptimizedImage, DatePipe],
  standalone: true,
  templateUrl: 'datapicker.component.html',
  styleUrl: 'datapicker.component.scss',
})
export class DatapickerComponent {
  protected date = signal(new Date());
  protected calendarMonth = computed(
    () => CalendarMonths[this.date().getMonth()]
  );
  protected fisrtDayOfMonth = computed(
    () => new Date(this.date().getFullYear(), this.date().getMonth())
  );
  protected lastDayOfMonth = computed(
    () => new Date(this.date().getFullYear(), this.date().getMonth() + 1, 0)
  );
  protected days = computed(() => {
    const days: (number | null)[] = [];

    // JUMP FIRST COLUMNS
    for (let i = 0; i < this.fisrtDayOfMonth().getDay(); i++) {
      days.push(null);
    }
    // INJECT THE DAYS OF MONTH
    for (let i = 1; i <= this.lastDayOfMonth().getDate(); i++) {
      days.push(i);
    }
    return days;
  });
  dateEmitter = output<Date>({ alias: 'onSelectDate' });

  nextMonth() {
    this.date.set(
      new Date(this.date().getFullYear(), this.date().getMonth() + 1)
    );
  }

  previousMonth() {
    this.date.set(
      new Date(this.date().getFullYear(), this.date().getMonth() - 1)
    );
  }

  selectDate(day: number | null) {
    if (day !== null) {
      this.dateEmitter.emit(
        new Date(this.date().getFullYear(), this.date().getMonth(), day)
      );
    }
  }
}
