import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { SelectService } from '@Services/select.service';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    AsyncPipe,
    HeaderComponent,
    SelectComponent,
  ],
  styleUrl: 'team.component.scss',
  template: `
    <fortes-header />
    <h1>Gerenciar Equipes</h1>

    <div>
      <fortes-select label="Selecionar Gestor" [options]="gestores$ | async" />
      <fortes-select label="Selecionar Obra" [options]="obras$ | async" />
      <textarea
        type="text"
        [(ngModel)]="setor"
        placeholder="Digite o setor"
      ></textarea>
      <button>Salvar</button>
    </div>

    <a routerLink="/">Voltar</a>
  `,
})
export class TeamComponent {
  private selectService = inject(SelectService);
  protected gestores$ = this.selectService.getGestaoEquipe();
  protected obras$ = this.selectService.getObras();
  protected setor = '';
}
