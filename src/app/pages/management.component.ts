import { Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NotificationService } from '@Services/notification.service';
import { CSVReaderService } from '@Services/csv-reader.service';
import { SelectService } from '@Services/select.service';
import { EquipeService } from '@Services/equipe.service';
import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';

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
  private notificationService = inject(NotificationService);
  private csvReaderService = inject(CSVReaderService);
  private selectService = inject(SelectService);
  private equipeService = inject(EquipeService);
  protected encarregados = this.selectService.getGestaoEquipe();
  protected operators = this.csvReaderService.getResult();
  protected encarregadoSelected: null | string = null;
  protected isDisableButton = false;

  onNewFile(event: Event) {
    const target = event.target as HTMLInputElement;
    this.csvReaderService.readFile(target.files![0]);
    target.value = '';
  }

  registerTeam() {
    this.isDisableButton = true;
    this.equipeService
      .adicionarOperadores(this.encarregadoSelected!, this.operators()!)
      .subscribe((res) => {
        if (res) {
          this.operators.set(null);
          this.notificationService.addNotification({
            description: 'Equipe Cadastrada com sucesso!',
            type: 'sucess',
          });
        } else {
          this.notificationService.addNotification({
            description:
              'Ocorreu algo no registro, por favor confira as informações e tente novamente mais tarde!',
            type: 'warn',
          });
        }
      });
  }

  removeOperator(matricula: string) {
    this.operators.update((curr) => {
      if (curr!.length < 2) return null;
      return curr!.filter((operator) => operator.matricula != matricula);
    });
  }
}
