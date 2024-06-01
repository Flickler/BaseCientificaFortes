import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, take } from 'rxjs';

import { environment } from '@environments/environment';
import { Operador } from '@Types/operador.type';

@Injectable({
  providedIn: 'root',
})
export class EquipeService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'equipe';

  adicionarOperadores(equipeId: string, operadores: Operador[]) {
    return this.http.post<null>(this.path + `/${equipeId}`, operadores).pipe(
      take(1),
      catchError((err) => of({ sucess: false, message: err }))
    );
  }
}
