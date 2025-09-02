import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { InputTextModule } from "primeng/inputtext";
import { UpdatePasswordComponent } from "./update-password.component";
import { UpdatePasswordRoutingModule } from "./update-password-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PasswordModule,
        ButtonModule,
        RippleModule,
        UpdatePasswordRoutingModule,
        InputTextModule
    ],
    declarations: [UpdatePasswordComponent]
})
export class UpdatePasswordModule { }
