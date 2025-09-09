import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../service/api/authentication.service';

@Component({
    selector: 'app-update-password',
    templateUrl: './update-password.component.html'
})
export class UpdatePasswordComponent {
    newPassword: string = '';
    confirmPassword: string = '';
    token: string = '';
    error: string | null = null;
    success: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthenticationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.token = (params['token'] || '').replace(/=*$/, '');
            console.log(this.token);
        });
    }

    onSubmit() {
        if (this.newPassword !== this.confirmPassword) {
            this.error = 'Les mots de passe ne correspondent pas.';
            return;
        }

        this.authService.updatePassword({
            token: this.token,
            newPassword: this.newPassword
        }).subscribe({
            next: () => {
                this.success = 'Mot de passe réinitialisé avec succès ✅';
                setTimeout(() => this.router.navigate(['/auth/login']), 2000);
            },
            error: (err) => {
                console.error('Update password failed', err);
                this.error = 'Impossible de réinitialiser le mot de passe ❌';
            }
        });
    }
}
