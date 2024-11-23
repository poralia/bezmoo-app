import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const AuthorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const credentials = authService.getCredentials();

  if (credentials) {
    const credCombine = `${credentials.api_key}:${credentials.api_secret}`;
    req = req.clone({
      setHeaders: {
        "Authorization": `Basic ${btoa(credCombine)}`,
      }
    })
  }

  return next(req);
};
