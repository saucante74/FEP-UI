import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = '        const token: string = \'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTFAdGVzdC5mciIsImlhdCI6MTcyNDYwMDQ1NCwiZXhwIjoxNzI0NjA0MDU0fQ.nmBJKQPi-MXavtJf6N1zJO3dGxvUrv4Mcxs4NdNMHnQ\';\n';


        req = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                // 'Authorization': `Bearer ${token}`,
            },
        });

        console.log('HTTP Request:', req);

        return next.handle(req);
    }
}
