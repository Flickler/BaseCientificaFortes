import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

import { NotificationService } from '@Services/notification.service';
import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { RegisterService } from '@Services/register.service';
import { Gestor } from '@Types/gestor.type';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent, SelectComponent],
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.scss',
})
export class RegisterComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  private notificationService = inject(NotificationService);
  protected isButtonDisable = false;

  protected form = this.fb.group({
    matricula: ['', [Validators.required]],
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
    confirmarSenha: ['', [Validators.required]],
    tipoRegistro: ['', [Validators.required]],
  });

  protected options = [
    { value: 'admin', viewValue: 'Administrador' },
    { value: 'encarregado', viewValue: 'Encarregado' },
  ];

  protected get controls() {
    return this.form.controls;
  }

  protected onSubmit() {
    if (this.form.valid) {
      this.isButtonDisable = true;
      this.controls.confirmarSenha.disable();
      this.controls.tipoRegistro.disable();
      this.controls.tipoRegistro.value == 'admin'
        ? this.formResponseTreatment(
            'admin',
            this.registerService.registerAdmin(this.form.value)
          )
        : this.formResponseTreatment(
            'encarregado',
            this.registerService.registerEncarregado(this.form.value)
          );
    }
  }

  private formResponseTreatment(
    tipoRegistro: string,
    request: Observable<Gestor>
  ) {
    request
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.controls.confirmarSenha.enable();
        this.controls.tipoRegistro.enable();
        this.controls.tipoRegistro.setValue(tipoRegistro);
        this.isButtonDisable = false;
        if (res != null) {
          this.form.reset();
          this.notificationService.addNotification({
            description: `O ${tipoRegistro} ${res.gestor.nome} foi cadastrado com sucesso!`,
            type: 'sucess',
          });
        } else {
          this.notificationService.addNotification({
            description:
              'Não foi possivel cadastrar o usuario, por favor verifique as informações e tente novamente mais tarde',
            type: 'warn',
          });
        }
      });
  }
}
