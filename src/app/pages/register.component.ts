import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, of } from 'rxjs';

import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { RegisterService } from '@Services/register.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, SelectComponent],
  styleUrl: 'register.component.scss',
  template: `
    <fortes-header />
    <h1>Cadastro</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input
        type="text"
        id="matricula"
        formControlName="matricula"
        placeholder="Matricula"
      />

      <input type="text" id="nome" formControlName="nome" placeholder="Nome" />

      <input
        type="text"
        id="email"
        formControlName="email"
        placeholder="Email"
      />

      <input
        type="password"
        id="senha"
        formControlName="senha"
        placeholder="Senha"
      />

      <input
        type="password"
        id="confirmarSenha"
        formControlName="confirmarSenha"
        placeholder="Confirme a sua senha"
      />

      <fortes-select
        label="Nivel Hierárquico"
        [options]="options"
        (onSelect)="controls.tipoRegistro.setValue($event)"
      />

      <button type="submit" [disabled]="form.invalid || isButtonDisable">
        Cadastrar
      </button>
    </form>
  `,
})
export class RegisterComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
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

  onSubmit() {
    if (this.form.valid) {
      this.isButtonDisable = true;
      this.controls.confirmarSenha.disable();
      this.controls.tipoRegistro.disable();
      if (this.controls.tipoRegistro.value == 'admin') {
        this.registerService
          .registerAdmin(this.form.value)
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
            this.controls.tipoRegistro.setValue('admin');
            this.isButtonDisable = false;
          });
      }
    }
  }
}
