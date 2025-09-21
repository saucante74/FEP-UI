import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from "../../service/api/auth.guard";
import { LoanAdminListComponent } from "../../components/admin/loan/loan-list/loan-admin-list.component";
import { RefundAdminListComponent } from "../../components/admin/refund/refund-list/refund-admin-list.component";
import { ReportAdminListComponent } from "../../components/admin/report/report-list/report-admin-list.component";
import { PendingUsersComponent } from "../../components/admin/pending-users/pending-users.component";
import { AdminDashboardComponent } from "../../components/admin/dashboard/admin-dashboard.component";

const routes: Routes = [
    {
        path: 'dashboard/view',
        component: AdminDashboardComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
    {
        path: 'loan/list',
        component: LoanAdminListComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
    {
        path: 'refund/list',
        component: RefundAdminListComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
    {
        path: 'report/list',
        component: ReportAdminListComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
    {
        path: 'pending-users',
        component: PendingUsersComponent,
        canActivate: [authGuard],
        data: { roles: ['ADMIN'] }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
