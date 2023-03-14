import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.auth.getToken(),
      },
    });

    return next.handle(tokenizedReq).pipe(
      catchError((errordata: { status: number; }) => {
        if (errordata.status == 401) {
          console.log(errordata.status);
          this.auth.logout()
        }
        return throwError(errordata);
      })
    );
  }
}
