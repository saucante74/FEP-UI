import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PasswordModule,
        ButtonModule,
        RippleModule,
        ResetPasswordRoutingModule,
        InputTextModule
    ],
    declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
