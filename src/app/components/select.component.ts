import { Component, inject, input, output, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

type option = {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'fortes-select',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'select.component.scss',
  template: `
    <div class="select_container" (click)="toggle()">
      <img
        ngSrc="assets/svg/engineering.svg"
        height="20"
        width="20"
        alt="Icone de cargo"
      />
      <p class="placeholder">{{ value() ? value()!.viewValue : label() }}</p>
      <img
        ngSrc="assets/svg/expand_more.svg"
        height="20"
        width="20"
        alt="Icone de cargo"
      />
    </div>
    <div class="options_container" [class.active]="active()">
      @for (option of options(); track $index) {
      <span class="option" (click)="onChoice(option)">
        {{ option.viewValue }}
      </span>
      }
    </div>
  `,
})
export class SelectComponent {
  label = input('Selecione uma opção');
  options = input.required<option[]>();
  onSelect = output<string>();
  protected value = signal<null | option>(null);
  protected active = signal(false);

  toggle() {
    this.active.update((curr) => !curr);
  }

  setValue(value: option) {
    this.value.set(value);
  }

  onChoice(option: option) {
    this.setValue(option);
    this.onSelect.emit(option.value);
    this.toggle();
  }
}
