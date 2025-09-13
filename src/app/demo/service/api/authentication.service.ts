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
    expiresIn: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    status: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private httpClient: HttpClient) {}

    login(payload: LoginRequest) {
        return this.httpClient.post<LoginResponse>(
            `${environment.apiBaseUrl}/auth/authenticate`,
            payload
        ).pipe(
            tap((response: LoginResponse) => {
                localStorage.setItem('access_token', response.token);
                localStorage.setItem('user', JSON.stringify({
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email,
                    role: response.role,
                    status: response.status,
                }));
            })
        );
    }

    register(payload: any) {
        return this.httpClient.post<LoginResponse>(
            `${environment.apiBaseUrl}/auth/register`,
            payload
        ).pipe(
            tap((response: LoginResponse) => {
                localStorage.setItem('access_token', response.token);
                localStorage.setItem('user', JSON.stringify({
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email,
                    role: response.role,
                }));
            })
        );
    }


    logout() {
        localStorage.removeItem('access_token');
    }

    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('access_token');
    }

    requestPasswordReset(email: string) {
        return this.httpClient.post(`${environment.apiBaseUrl}/auth/reset-password-request`, null, {
            params: { email }
        });
    }
    updatePassword(payload: { token: string; newPassword: string }) {
        return this.httpClient.post(`${environment.apiBaseUrl}/auth/reset-password`, payload);
    }

    getUserInfo() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    getUserRole(): string {
        const token = localStorage.getItem('access_token');
        if (!token) return '';

        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role || '';
    }
}
