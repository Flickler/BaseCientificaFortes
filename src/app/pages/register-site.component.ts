import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputDatapickerComponent } from '@Components/input-datapicker.component';
import { AddressFormComponent } from '@Components/address-form.component';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    InputDatapickerComponent,
    AddressFormComponent,
  ],
  templateUrl: 'register-site.component.html',
  styleUrl: 'register-site.component.scss',
})
export class RegisterSiteComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    identification: [
      '',
      [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
    ],
    startDate: this.fb.control<Date | null>(null, [Validators.required]),
    endDate: this.fb.control<Date | null>(null, [Validators.required]),
  });
}
