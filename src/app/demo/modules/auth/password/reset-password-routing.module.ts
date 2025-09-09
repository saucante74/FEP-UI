import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from '../../../components/auth/password/reset-password.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ResetPasswordComponent }
    ])],
    exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
