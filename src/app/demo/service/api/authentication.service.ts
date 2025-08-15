import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";
import { environment } from "../../../../environments/environment";

export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    token: string,
    expiresIn: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private httpClient: HttpClient) { }

    login(payload: LoginRequest) {
        return this.httpClient.post<LoginResponse>(
            `${environment.apiBaseUrl}auth/login`,
            payload
        ).pipe(
            tap((response) => {
                localStorage.setItem('access_token', response.token)
            })
        );

    }
}
