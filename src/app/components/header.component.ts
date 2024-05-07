import { Component } from '@angular/core';
import { UserActionsComponent } from './user-action.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'fortes-header',
  standalone: true,
  imports: [NgOptimizedImage, UserActionsComponent],
  styleUrl: 'header.component.scss',
  template: `
    <header>
      <img
        ngSrc="assets/png/fortesLogomarca.png"
        height="36"
        width="120"
        alt="Fortes logomarca"
        priority
      />
      <fortes-user-actions />
    </header>
  `,
})
export class HeaderComponent {}
