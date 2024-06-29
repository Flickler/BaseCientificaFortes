import { NoteStatus } from '@Types/notification.type';
import { NgOptimizedImage } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fortes-toast',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'toast.component.scss',
  template: `
    <img
      [ngSrc]="
        type === 'info'
          ? 'assets/svg/info.svg'
          : type === 'warn'
          ? 'assets/svg/report.svg'
          : 'assets/svg/check_circle.svg'
      "
      height="20"
      width="20"
      alt="notificação"
    />
    <ng-content />
  `,
})
export class ToastComponent {
  @HostBinding('class')
  @Input()
  type: NoteStatus = 'info';
}
