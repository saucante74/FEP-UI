import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthenticationService, LoginResponse } from '../../../service/api/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {
    formData = {
        username: '',
        email: '',
        lastname: '',
        firstname: '',
        role: '',
        password: ''
    };

    roles = [
        { label: 'Emprunteur', value: 'BORROWER' },
        { label: 'Prêteur', value: 'LENDER' }
    ];

    constructor(
        public layoutService: LayoutService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {}

    onSubmit() {
        console.log('Payload d’inscription :', this.formData);

        this.authenticationService.register(this.formData).subscribe({
            next: (response: LoginResponse) => {
                console.log('Inscription réussie', response);
                this.router.navigate(['/']);
            },
            error: (err) => {
                console.error('Erreur lors de l’inscription', err);
            }
        });
    }
}
