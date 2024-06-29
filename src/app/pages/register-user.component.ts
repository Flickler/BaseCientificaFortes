import { Component, inject, viewChild } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
// import { Observable, catchError, of } from 'rxjs';

// import { NotificationService } from '@Services/notification.service';
// import { RegisterService } from '@Services/register.service';
import { HeaderComponent } from '@Components/header.component';
import { SelectComponent } from '@Components/select.component';
import { ToastComponent } from '@Components/toast.component';
import { AddressFormComponent } from '@Components/address-form.component';
import { NgxMaskDirective } from 'ngx-mask';
// import { Gestor } from '@Types/gestor.type';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    NgxMaskDirective,
    RouterLink,
    HeaderComponent,
    SelectComponent,
    ToastComponent,
    AddressFormComponent,
  ],
  templateUrl: 'register-user.component.html',
  styleUrl: 'register-user.component.scss',
})
export class RegisterUSerComponent {
  private fb = inject(NonNullableFormBuilder);
  // private registerService = inject(RegisterService);
  // private notificationService = inject(NotificationService);
  protected adressForm = viewChild(AddressFormComponent);
  protected isButtonDisable = false;

  protected form = this.fb.group({
    matricula: [
      '',
      [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
    ],
    nome: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    email: ['', [Validators.required, Validators.email]],
    senha: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
    confirmarSenha: ['', [Validators.required]],
    tipoRegistro: ['', [Validators.required]],
  });

  protected options = [
    { value: 'admin', viewValue: 'Administrador' },
    { value: 'encarregado', viewValue: 'Encarregado' },
  ];

  protected get matricula() {
    return this.form.controls.matricula;
  }
  protected get nome() {
    return this.form.controls.nome;
  }
  protected get email() {
    return this.form.controls.email;
  }
  protected get senha() {
    return this.form.controls.senha;
  }
  protected get confirmarSenha() {
    return this.form.controls.confirmarSenha;
  }
  protected get tipoRegistro() {
    return this.form.controls.tipoRegistro;
  }

  protected onSubmit() {
    if (this.form.valid) {
      this.isButtonDisable = true;
      this.confirmarSenha.disable();
      this.tipoRegistro.disable();

      const formValue = {
        ...this.form.value,
        address: this.adressForm()?.value,
      };

      console.log(formValue);

      // this.controls.tipoRegistro.value == 'admin'
      //   ? this.formResponseTreatment(
      //       'admin',
      //       this.registerService.registerAdmin(formValue)
      //     )
      //   : this.formResponseTreatment(
      //       'encarregado',
      //       this.registerService.registerEncarregado(formValue)
      //     );
    }
  }

  // private formResponseTreatment(
  //   tipoRegistro: string,
  //   request: Observable<Gestor>
  // ) {
  //   request
  //     .pipe(
  //       catchError((err) => {
  //         console.log(err);
  //         return of(null);
  //       })
  //     )
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.controls.confirmarSenha.enable();
  //       this.controls.tipoRegistro.enable();
  //       this.controls.tipoRegistro.setValue(tipoRegistro);
  //       this.isButtonDisable = false;
  //       if (res != null) {
  //         this.form.reset();
  //         this.notificationService.addNotification({
  //           description: `O ${tipoRegistro} ${res.gestor.nome} foi cadastrado com sucesso!`,
  //           type: 'sucess',
  //         });
  //       } else {
  //         this.notificationService.addNotification({
  //           description:
  //             'Não foi possivel cadastrar o usuario, por favor verifique as informações e tente novamente mais tarde',
  //           type: 'warn',
  //         });
  //       }
  //     });
  // }
}
