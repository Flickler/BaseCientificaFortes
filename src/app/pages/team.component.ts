import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TeamService } from '@Services/team.service';
import { SelectService } from '@Services/select.service';
import { NotificationService } from '@Services/notification.service';
import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';

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
      <fortes-select
        label="Selecionar Encarregado"
        [options]="encarregados$ | async"
        (onSelect)="selectedEncarregado = $event"
      />
      <fortes-select
        label="Selecionar Obra"
        [options]="obras$ | async"
        (onSelect)="selectedObra = $event"
      />
      <textarea
        type="text"
        [(ngModel)]="setor"
        placeholder="Digite o setor"
      ></textarea>
      <button (click)="criarGestaoEquipe()">Salvar</button>
    </div>

    <a routerLink="/">Voltar</a>
  `,
})
export class TeamComponent {
  private teamService = inject(TeamService);
  private selectService = inject(SelectService);
  private notificationService = inject(NotificationService);
  protected encarregados$ = this.selectService.getEncarregados();
  protected obras$ = this.selectService.getObras();
  protected selectedEncarregado: string | null = null;
  protected selectedObra: string | null = null;
  protected setor = '';

  criarGestaoEquipe() {
    if (this.selectedEncarregado && this.selectedObra) {
      this.teamService
        .registerTeam({
          encarregadoId: this.selectedEncarregado,
          obraId: this.selectedObra,
          setor: this.setor,
        })
        .subscribe((res) => {
          if (res) {
            this.setor = '';
            this.notificationService.addNotification({
              description: 'Time criado com sucesso!',
              type: 'sucess',
            });
          } else {
            this.notificationService.addNotification({
              description:
                'Ops! Algo ocorreu durante a criação do time, tente novamente mais tarde',
              type: 'warn',
            });
          }
        });
    }
  }
}
