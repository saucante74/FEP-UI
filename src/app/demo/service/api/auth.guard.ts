import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authGuard = (route: ActivatedRouteSnapshot) => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
        router.navigate(['/auth/login']);
        return false;
    }

    const expectedRoles = route.data?.['roles'] as string[];
    const userRole = authService.getUserRole();

    if (expectedRoles && !expectedRoles.includes(userRole)) {
        router.navigate(['/auth/access']);
        return false;
    }

    return true;
};
