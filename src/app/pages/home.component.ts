import { Component } from '@angular/core';
import { HeaderComponent } from '@Components/header.component';
import { TabLinkComponent } from '@Components/tab-link.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, TabLinkComponent],
  styleUrl: 'home.component.scss',
  template: `
    <fortes-header />
    <main>
      <fortes-tab-link routerLink="register">Cadastrar</fortes-tab-link>
      <fortes-tab-link routerLink="team">Alocar Equipes</fortes-tab-link>
      <fortes-tab-link routerLink="management">Gerenciar Equipes</fortes-tab-link>
      <fortes-tab-link routerLink="agend">Editar Agenda</fortes-tab-link>
      <fortes-tab-link routerLink="report">Relatórios</fortes-tab-link>
    </main>
  `,
})
export class HomeComponent {}
