import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserStatus } from "../../dtos/user/user-status.enum";

export const statusGuard = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    const user = authService.getUserInfo();
    if (UserStatus.VALIDATED !== user?.status) {
        router.navigate(['/auth/pending-validation']);
        return false;
    }

    return true;
};
