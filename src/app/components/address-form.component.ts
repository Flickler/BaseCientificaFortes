import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ToastComponent } from './toast.component';

@Component({
  selector: 'fortes-address-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, ToastComponent],
  templateUrl: 'address-form.component.html',
  styleUrl: 'address-form.component.scss',
})
export class AddressFormComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    zipCode: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
    ],
    street: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    number: this.fb.control<number | null>(null, [Validators.min(1)]),
    area: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    city: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    state: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
    ],
    complement: this.fb.control<string | null>(null, [
      Validators.maxLength(100),
    ]),
  });

  protected get zipCode() {
    return this.form.controls.zipCode;
  }
  protected get street() {
    return this.form.controls.street;
  }
  protected get state() {
    return this.form.controls.state;
  }
  protected get area() {
    return this.form.controls.area;
  }
  protected get city() {
    return this.form.controls.city;
  }

  get valid() {
    return this.form.valid;
  }
  get invalid() {
    return this.form.invalid;
  }
  get value() {
    return this.form.value;
  }
}
