import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdatePasswordComponent } from "./update-password.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UpdatePasswordComponent }
    ])],
    exports: [RouterModule]
})
export class UpdatePasswordRoutingModule { }
