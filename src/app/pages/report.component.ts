import { Component, inject } from '@angular/core';

import { RelatorioService } from '@Services/relatorio.service';
import { HeaderComponent } from '@Components/header.component';
import { AsyncPipe } from '@angular/common';
import { LocalDatePipe } from '../pipes/date.pipe';
import { LoadingComponent } from '@Components/loading.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    LocalDatePipe,
    HeaderComponent,
    LoadingComponent,
  ],
  styleUrl: 'report.component.scss',
  template: `
    <fortes-header />
    <h1>Relatórios</h1>
    @if(report$ | async; as relatorio) {
    <main>
      @for (rel of relatorio; track $index) {
      <div class="encarregado-container">
        <h2>{{ rel.encarregado + ' - ' + rel.setor }}</h2>
        <div class="dates">
          @for(refeicao of rel.refeicoes; track $index){
          <div class="date">
            <h3>{{ refeicao.dataRefeicao | localDate }}</h3>
            <p>Café da manhã: {{ refeicao.cafe }}</p>
            <p>Almoço: {{ refeicao.almoco }}</p>
            <p>Janta: {{ refeicao.jantar }}</p>
          </div>
          }
        </div>
        <p class="total">Total semanal: {{ rel.totalSemanal }} refeições</p>
      </div>
      }
    </main>
    } @else {
    <fortes-loading label="Carregando relatórios, por favor aguarde!" />
    }
    <a routerLink="/">Voltar</a>
  `,
})
export class ReportComponent {
  private reportService = inject(RelatorioService);
  protected report$ = this.reportService.getAutomaticReport();
}
