import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { RegisterUser } from '@Types/user.type';
import { Gestor } from '@Types/gestor.type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl;

  registerAdmin(form: RegisterUser) {
    return this.http.post<Gestor>(this.path + 'admin', {
      gestor: form,
    });
  }

  registerEncarregado(form: RegisterUser) {
    return this.http.post<Gestor>(this.path + 'encarregado', {
      gestor: form,
    });
  }
}
