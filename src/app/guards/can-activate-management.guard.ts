import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '@Services/login.service';

export const canActivateManagement: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const login = inject(LoginService).isLogged();
  return login ? login : router.createUrlTree(['login']);
};
