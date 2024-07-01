import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[focusOutEmmiter]',
  standalone: true,
})
export class FocusOutDirective {
  @HostListener('focusout') onFocusOut() {
    this.focusOutEmmiter.emit();
  }
  focusOutEmmiter = output<void>({ alias: 'onFocusOut' });
}
