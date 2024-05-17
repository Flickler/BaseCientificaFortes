import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Gestor } from '@Types/gestor.type';

@Injectable({
  providedIn: 'root',
})
export class EncarregadoService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + '/api/encarregado';

  getEncarregados() {
    return this.http.get<Gestor[]>(this.path);
  }
}
