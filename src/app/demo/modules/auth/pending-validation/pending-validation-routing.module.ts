import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendingValidationComponent } from "../../../components/auth/pending-validation/pending-validation.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PendingValidationComponent }
    ])],
    exports: [RouterModule]
})
export class PendingValidationRoutingModule { }
