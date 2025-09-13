import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { authGuard } from "../../service/api/auth.guard";
import { statusGuard } from "../../service/api/status.guard";

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: HomepageComponent,
            canActivate: [statusGuard],
        }
    ])],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }
