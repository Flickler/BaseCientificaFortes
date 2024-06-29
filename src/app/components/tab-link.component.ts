import { Component, HostBinding, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fortes-tab-link',
  standalone: true,
  styleUrl: 'tab-link.component.scss',
  template: '<ng-content />',
  hostDirectives: [{ directive: RouterLink, inputs: ['routerLink'] }],
})
export class TabLinkComponent {
  secondary = input(false, {
    transform: (value: string | boolean) =>
      typeof value === 'string' ? true : value,
  });
  @HostBinding('class') get className() {
    return this.secondary() ? 'secondary' : 'primary';
  }
}
