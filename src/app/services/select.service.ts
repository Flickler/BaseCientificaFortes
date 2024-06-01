import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '@environments/environment';
import { SelectGestor } from '@Types/gestor.type';
import { Option } from '@Types/option.type';
import { Obra } from '@Types/obra.type';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'select';

  getGestaoEquipe(): Observable<Option[]> {
    return this.http.get<SelectGestor[]>(this.path + '/gestao-equipe').pipe(
      map((res) =>
        res.map((option) => {
          return {
            value: option.id,
            viewValue: `${option.encarregado.gestor.nome} - ${option.setor}`,
          };
        })
      )
    );
  }

  getObras(): Observable<Option[]> {
    return this.http.get<Obra[]>(this.path + '/obra').pipe(
      map((res) =>
        res.map((option) => {
          return {
            value: option.id,
            viewValue: `${option.identificacao} - ${option.endereco.cidade}`,
          };
        })
      )
    );
  }
}
