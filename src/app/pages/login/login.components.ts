import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
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

    <form>
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
        />
      </div>

      <button type="submit">Acessar</button>
      <a>Cadastrar</a>
    </form>

    <p class="version">Versão 1.0.0</p>
  `,
})
export class LoginComponent {}