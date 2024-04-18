import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  styleUrl: 'home.component.scss',
  template: `
    <header>
      <img 
        ngSrc="assets/png/fortesLogomarca.png"
        height="36"
        width="120" 
        alt="Fortes logomarca"
        priority
      >
      <a>
        <img 
          ngSrc="assets/svg/drag_handle.svg"
          height="6"
          width="14" 
          alt="Icone para submenu">
      </a>
    </header>
    <main>
      <a class="actions">Cadastrar</a>
      <a class="actions" routerLink="management">Gerenciar Equipes</a>
      <a class="actions">Alocar Equipes</a>
    </main>
  `,
})
export class HomeComponent {}