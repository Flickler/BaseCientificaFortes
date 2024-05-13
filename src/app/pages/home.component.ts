import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@Components/header.component';

import { UserActionsComponent } from '@Components/user-action.component';

@Component({
  standalone: true,
  imports: [RouterLink, HeaderComponent, UserActionsComponent],
  styleUrl: 'home.component.scss',
  template: `
    <fortes-header />
    <main>
      <a class="actions" routerLink="register">Cadastrar</a>
      <a class="actions" routerLink="management">Gerenciar Equipes</a>
      <a class="actions">Alocar Equipes</a>
    </main>
  `,
})
export class HomeComponent {}
