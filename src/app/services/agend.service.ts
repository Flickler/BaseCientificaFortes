import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, take } from 'rxjs';

import { environment } from '@environments/environment';
import { Agend, UpdateAgend } from '@Types/agend.type';

@Injectable({
  providedIn: 'root',
})
export class AgendService {
  private http = inject(HttpClient);
  private path = environment.apiUrl;

  updateDateAgend(agend: UpdateAgend) {
    return this.http.post<Agend[]>(this.path + 'data-obra', agend).pipe(
      take(1),
      catchError(() => of(null))
    );
  }
}
