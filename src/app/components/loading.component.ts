import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'fortes-loading',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'loading.component.scss',
  template: `
    <img
      ngSrc="assets/svg/progress_activity.svg"
      [width]="size()"
      [height]="size()"
      alt="Carregando Conteudo..."
      priority
    />
    <p>{{ label() }}</p>
  `,
})
export class LoadingComponent {
  size = input(64);
  label = input('');
}
