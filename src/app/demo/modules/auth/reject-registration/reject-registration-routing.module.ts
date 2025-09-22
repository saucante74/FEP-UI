import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    RejectRegistrationComponent
} from "../../../components/auth/reject-registration/reject-registration.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RejectRegistrationComponent }
    ])],
    exports: [RouterModule]
})
export class RejectRegistrationRoutingModule { }
