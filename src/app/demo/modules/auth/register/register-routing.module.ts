import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from "../../../components/auth/register/register.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RegisterComponent }
    ])],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
