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
      <a class="actions" routerLink="team">Alocar Equipes</a>
      <a class="actions" routerLink="agend">Editar Agenda</a>
      <a class="actions" routerLink="report">Relatórios</a>
    </main>
  `,
})
export class HomeComponent {}
