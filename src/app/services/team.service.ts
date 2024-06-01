import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, take } from 'rxjs';

import { environment } from '@environments/environment';
import { RegisterTeam } from '@Types/team.type';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'gestao-equipe';

  registerTeam(form: RegisterTeam) {
    return this.http.post(this.path, form).pipe(
      take(1),
      catchError(() => of(null))
    );
  }
}
