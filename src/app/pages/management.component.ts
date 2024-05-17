import { Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { CSVReaderService } from '@Services/csv-reader.service';
import { EncarregadoService } from '@Services/encarregado.service';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    AsyncPipe,
    HeaderComponent,
    SelectComponent,
  ],
  templateUrl: 'management.component.html',
  styleUrl: 'management.component.scss',
  providers: [CSVReaderService],
})
export class ManagementComponent {
  private csvReaderService = inject(CSVReaderService);
  private encarregadoService = inject(EncarregadoService);
  protected encarregados = this.encarregadoService.getEncarregados().pipe(
    map((encarregados) =>
      encarregados.map((encarregado) => {
        return {
          viewValue: encarregado.gestor.nome,
          value: encarregado.id,
        };
      })
    ),
    catchError(() => of(null))
  );
  protected operators = this.csvReaderService.getResult();
  protected encarregadoSelected: null | string = null;

  onNewFile(event: Event) {
    const target = event.target as HTMLInputElement;
    this.csvReaderService.readFile(target.files![0]);
    target.value = '';
  }

  registerTeam() {
    console.log({
      encarregado: this.encarregadoSelected,
      operadores: this.operators(),
    });
  }

  removeOperator(matricula: string) {
    this.operators.update((curr) => {
      if (curr!.length < 2) return null;
      return curr!.filter((operator) => operator.matricula != matricula);
    });
  }
}
