import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../../service/api/authentication.service";

@Component({
    selector: 'app-pending-validation',
    templateUrl: './pending-validation.component.html',
})
export class PendingValidationComponent implements OnInit {
    userEmail: string | null = null;

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const user = this.authService.getUserInfo();
        this.userEmail = user?.email ?? null;
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
