import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UserActionsComponent } from './user-action.component';

@Component({
  selector: 'fortes-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, UserActionsComponent],
  styleUrl: 'header.component.scss',
  template: `
    <header>
      <a routerLink="/">
        <img
          ngSrc="assets/png/fortesLogomarca.png"
          height="36"
          width="120"
          alt="Fortes logomarca"
          priority
        />
      </a>
      <fortes-user-actions />
    </header>
  `,
})
export class HeaderComponent {}
