import { Component, HostListener, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { LoginService } from '@Services/login.service';

@Component({
  selector: 'fortes-user-actions',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'user-action.component.scss',
  template: `
    <button class="actions_icon" (click)="toggle()">
      <img
        ngSrc="assets/svg/drag_handle.svg"
        height="6"
        width="14"
        alt="Icone para submenu"
      />
    </button>
    <div class="actions_container" [class.active]="active">
      <button>Suporte</button>
      <button (click)="logout()">Sair</button>
    </div>
  `,
})
export class UserActionsComponent {
  private loginService = inject(LoginService);
  protected active = false;

  @HostListener('focusout') closeAction() {
    this.active = false;
  }

  toggle() {
    this.active = !this.active;
  }

  logout() {
    this.loginService.logout();
  }
}
