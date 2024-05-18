import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { FormRegister } from '@Types/register.type';
import { Gestor } from '@Types/gestor.type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl;

  registerAdmin(form: FormRegister) {
    return this.http.post<Gestor>(this.path + 'admin', {
      gestor: form,
    });
  }

  registerEncarregado(form: FormRegister) {
    return this.http.post<Gestor>(this.path + 'encarregado', {
      gestor: form,
    });
  }
}
