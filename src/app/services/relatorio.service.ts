import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, take } from 'rxjs';

import { environment } from '@environments/environment';
import { Report } from '@Types/report.type';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'relatorio';

  getAutomaticReport() {
    return this.http.get<Report[]>(this.path + '/automatico').pipe(
      take(1),
      catchError(() => of(null))
    );
  }
}
