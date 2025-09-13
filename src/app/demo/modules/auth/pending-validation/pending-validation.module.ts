import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { InputTextModule } from "primeng/inputtext";
import { PendingValidationRoutingModule } from "./pending-validation-routing.module";
import { PendingValidationComponent } from "../../../components/auth/pending-validation/pending-validation.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PasswordModule,
        ButtonModule,
        RippleModule,
        PendingValidationRoutingModule,
        InputTextModule
    ],
    declarations: [PendingValidationComponent]
})
export class PendingValidationModule { }
