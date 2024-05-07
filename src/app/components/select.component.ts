import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'fortes-select',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'select.component.scss',
  template: `
    <div class="select_container">
      <img
        ngSrc="assets/svg/engineering.svg"
        height="20"
        width="20"
        alt="Icone de cargo"
      />
      <p class="placeholder">{{ label() }}</p>
      <img
        ngSrc="assets/svg/expand_more.svg"
        height="20"
        width="20"
        alt="Icone de cargo"
      />
    </div>
    <div class="options_container"></div>
  `,
})
export class SelectComponent {
  label = input('Selecione uma opção');
  options = input.required<{ value: string; viewValue: string }[]>();
}
