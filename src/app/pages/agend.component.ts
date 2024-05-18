import { HeaderComponent } from '@Components/header.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [HeaderComponent],
  styleUrl: 'agend.component.scss',
  template: `
    <fortes-header />
    <h1>Editar Agenda</h1>
    <div class="week_list">
      <span class="week_day atypical">D</span>
      <span class="week_day">S</span>
      <span class="week_day">T</span>
      <span class="week_day">Q</span>
      <span class="week_day">Q</span>
      <span class="week_day">S</span>
      <span class="week_day atypical">S</span>
    </div>
    <input type="checkbox" id="atypical-check" />
    <label for="atypical-check">
      <span class="check_container">✓</span>
      <span class="check_label">Dia atípico</span>
    </label>
    <textarea placeholder="Adicionar evento..."></textarea>
    <button>Salvar</button>
  `,
})
export class AgendComponent {}
