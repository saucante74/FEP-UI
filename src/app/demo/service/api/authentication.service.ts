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
    constructor(private httpClient: HttpClient) {}

    login(payload: LoginRequest) {
        return this.httpClient.post<LoginResponse>(
            `${environment.apiBaseUrl}/auth/authenticate`,
            payload
        ).pipe(
            tap((response) => {
                localStorage.setItem('access_token', response.token);
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

    getUserRole(): string {
        const token = localStorage.getItem('access_token');
        if (!token) return '';

        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role || '';
    }
}
