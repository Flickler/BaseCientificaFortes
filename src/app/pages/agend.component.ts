import { Component, computed, inject, signal } from '@angular/core';
import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';

import { AgendService } from '@Services/agend.service';
import { SelectService } from '@Services/select.service';
import { NotificationService } from '@Services/notification.service';
import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { FormsModule } from '@angular/forms';
import { UpdateAgend } from '@Types/agend.type';

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    HeaderComponent,
    SelectComponent,
    DatePipe,
    AsyncPipe,
  ],
  styleUrl: 'agend.component.scss',
  templateUrl: 'agend.component.html',
})
export class AgendComponent {
  private agendService = inject(AgendService);
  private selectService = inject(SelectService);
  private notificationService = inject(NotificationService);
  protected date = signal<Date>(new Date());
  protected weekday = computed(() => this.date().getDay());
  protected obras$ = this.selectService.getObras();
  protected obraSelected = signal<string | null>(null);
  protected atypical = false;
  protected description = '';

  setDay(dayNumber: number) {
    this.weekday() < dayNumber
      ? this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() + (dayNumber - this.weekday())
          )
        )
      : this.weekday() > dayNumber
      ? this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() - (this.weekday() - dayNumber)
          )
        )
      : null;
  }

  setWeek(action: 'previous' | 'next') {
    action == 'next'
      ? this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() + 7
          )
        )
      : this.date.set(
          new Date(
            this.date().getFullYear(),
            this.date().getMonth(),
            this.date().getDate() - 7
          )
        );
  }

  sendDateInformation() {
    const agend: UpdateAgend = {
      obras: this.obraSelected() ? [{ id: this.obraSelected()! }] : null,
      controleData: {
        dataRefeicao: `${this.date().getFullYear()}-${
          this.date().getMonth() < 9
            ? `0${this.date().getMonth() + 1}`
            : this.date().getMonth() + 1
        }-${
          this.date().getDate() < 9
            ? `0${this.date().getDate() + 1}`
            : this.date().getDate() + 1
        }`,
        descricao: this.description,
        atipico: this.atypical,
      },
    };

    this.agendService.updateDateAgend(agend).subscribe((res) => {
      if (res) {
        this.atypical = false;
        this.description = '';
        this.obraSelected.set(null);
        this.notificationService.addNotification({
          description: 'A agenda foi criada com sucesso',
          type: 'sucess',
        });
      } else {
        this.notificationService.addNotification({
          description:
            'Algo aconteceu na solicitação da agenda, por favor confira os dados e tente novamente',
          type: 'warn',
        });
      }
    });
  }
}
