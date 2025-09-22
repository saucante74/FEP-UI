import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { InputTextModule } from "primeng/inputtext";
import {
    RejectRegistrationComponent
} from "../../../components/auth/reject-registration/reject-registration.component";
import { RejectRegistrationRoutingModule } from "./reject-registration-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PasswordModule,
        ButtonModule,
        RippleModule,
        RejectRegistrationRoutingModule,
        InputTextModule
    ],
    declarations: [RejectRegistrationComponent]
})
export class RejectRegistrationModule { }
