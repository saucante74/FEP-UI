import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthenticationService, LoginResponse } from "../../../service/api/authentication.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    email!: string;

    password!: string;

    formData = {
        email: '',
        password: ''
    };

    constructor(
        public layoutService: LayoutService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    onSubmit() {
        this.authenticationService.login(this.formData).subscribe({
            next: (value: LoginResponse) => {
                console.log('Login success', value);
                this.router.navigate(['/']);
            },
            error: (err) => {
                console.error('Login failed', err);
            }
        });
    }

    goToForgotPassword() {
        this.router.navigate(['/auth/reset-password']);
    }

    goToRegistration() {
        this.router.navigate(['/auth/register']);
    }
}
