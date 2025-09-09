import { Component } from '@angular/core';
import { AuthenticationService } from '../../../service/api/authentication.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
    email: string = '';
    error: string | null = null;
    success: string | null = null;

    constructor(private authService: AuthenticationService) {}

    onSubmit() {
        this.error = null;
        this.success = null;

        this.authService.requestPasswordReset(this.email).subscribe({
            next: () => {
                this.success = 'Un email de réinitialisation vous a été envoyé !';
            },
            error: (err) => {
                console.error('Password reset request failed', err);
                this.error = 'Impossible d’envoyer l’email de réinitialisation.';
            }
        });
    }
}
