import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const token: string = '        const token: string = \'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTFAdGVzdC5mciIsImlhdCI6MTcyNDYwMDQ1NCwiZXhwIjoxNzI0NjA0MDU0fQ.nmBJKQPi-MXavtJf6N1zJO3dGxvUrv4Mcxs4NdNMHnQ\';\n';

        const token = localStorage.getItem('access_token');

        req = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            },
        });
0
        console.log('HTTP Request:', req);

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.router.navigate(['/auth/login']);
                }
                return throwError(() => error);
            })
        );
    }
}
