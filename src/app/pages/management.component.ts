import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [HeaderComponent, SelectComponent],
  styleUrl: 'management.component.scss',
  template: `
    <fortes-header />
    <h1>Gerenciar Equipes</h1>
    <fortes-select [options]="[]" />
  `,
})
export class ManagementComponent {}
