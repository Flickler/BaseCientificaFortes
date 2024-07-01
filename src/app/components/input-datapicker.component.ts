import { Component, forwardRef, input, signal, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe, NgOptimizedImage } from '@angular/common';

import { DatapickerComponent } from './datapicker.component';

@Component({
  selector: 'fortes-input-datapicker',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe, DatapickerComponent],
  styleUrl: 'input-datapicker.component.scss',
  templateUrl: 'input-datapicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDatapickerComponent),
      multi: true,
    },
  ],
})
export class InputDatapickerComponent implements ControlValueAccessor {
  placeholder = input('');
  protected value = signal<Date | null>(null);
  private onChangeCallback!: (newDate: Date) => void;
  private onTouchedCallback!: () => void;
  protected active = signal(false);
  protected disableState = false;
  datapicker = viewChild(DatapickerComponent);

  setActive(value: boolean) {
    this.active.set(value);
  }

  writeValue(obj: Date): void {
    this.value.set(obj);
  }
  registerOnChange(fn: (newDate: Date) => void): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disableState = isDisabled;
  }

  onSelectDatapicker(date: Date) {
    this.setActive(false);
    this.writeValue(date);
    this.onChangeCallback(date);
    this.onTouchedCallback();
  }
}
