import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from "../../components/dashboard/user-dashboard.component";
import { authGuard } from "../../service/api/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: UserDashboardComponent,
        canActivate: [authGuard],
        data: { roles: ['LENDER', 'BORROWER'] }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserDashboardRoutingModule {}
