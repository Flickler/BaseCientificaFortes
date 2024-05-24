import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Operador } from '@Types/operador.type';

@Injectable({
  providedIn: 'root',
})
export class EquipeService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'equipe';

  adicionarOperadores(equipeId: string, operadores: Operador[]) {
    return this.http.post<null>(this.path + `/${equipeId}`, operadores);
  }
}
