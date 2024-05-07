import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private router = inject(Router);
  private readonly acceptTestAdministrators = environment.administrators;
  private login = false;

  constructor() {
    if (
      localStorage.getItem('not-production-login-persistence') == 'persiste'
    ) {
      this.login = true;
    }
  }

  tryLogin({ email, password }: Partial<{ email: string; password: string }>) {
    for (let admin of this.acceptTestAdministrators) {
      if (email == admin.email && password == admin.password) {
        this.login = true;
        localStorage.setItem('not-production-login-persistence', 'persiste');
        this.router.navigateByUrl('');
        return;
      }
    }
  }

  isLogged() {
    return this.login;
  }

  logout() {
    localStorage.removeItem('not-production-login-persistence');
    this.login = false;
    this.router.navigateByUrl('login');
  }
}
