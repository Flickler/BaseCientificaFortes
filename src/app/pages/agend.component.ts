import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';

import { HeaderComponent } from '@Components/header.component';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, DatePipe],
  styleUrl: 'agend.component.scss',
  templateUrl: 'agend.component.html',
})
export class AgendComponent {
  protected date = signal<Date>(new Date());
  protected weekday = computed(() => this.date().getDay());

  setDay(dayNumber: number) {
    this.weekday() < dayNumber
      ? this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() + (dayNumber - this.weekday())
          )
        )
      : this.weekday() > dayNumber
      ? this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() - (this.weekday() - dayNumber)
          )
        )
      : null;
  }

  setWeek(action: 'previous' | 'next') {
    action == 'next'
      ? this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() + 7
          )
        )
      : this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() - 7
          )
        );
  }
}
