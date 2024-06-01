import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { LoginService } from '@Services/login.service';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  styleUrl: 'login.component.scss',
  template: `
    <img
      ngSrc="assets/png/fortesLogomarca.png"
      height="77"
      width="260"
      alt="Logomarca da fortes engenharia"
      priority
    />

    <div class="welcome">
      <h1>Bem vindo!</h1>
      <p>Informe suas credenciais para continuar</p>
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form_field">
        <img
          class="input_icon"
          ngSrc="assets/svg/person.svg"
          height="20"
          width="20"
          alt="icone pessoal"
        />
        <input
          type="text"
          placeholder="Digite a sua inscrição"
          formControlName="email"
        />
      </div>
      <div class="form_field">
        <img
          class="input_icon"
          ngSrc="assets/svg/lock.svg"
          height="20"
          width="15"
          alt="icone de segurança"
        />
        <input
          type="password"
          placeholder="Digite a sua senha"
          formControlName="password"
        />
      </div>

      <button type="submit" [disabled]="form.invalid">Acessar</button>
    </form>

    <p class="version">Versão 1.0.0</p>
  `,
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private fb = inject(NonNullableFormBuilder);

  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.form.valid) {
      this.loginService.tryLogin(this.form.value);
    }
  }
}
