import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardViewComponent } from '../../components/admin/dashboard/admin-dashboard-view.component';
import { authGuard } from "../../service/api/auth.guard";
import { LoanAdminListComponent } from "../../components/admin/loan/loan-list/loan-admin-list.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: AdminDashboardViewComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
    {
        path: 'loan/list',
        component: LoanAdminListComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
