import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanAdminListComponent } from '../../components/admin/loan/loan-list/loan-admin-list.component';
import { LoanRequestComponent } from '../../components/loan/loan-request/loan-request.component';
import { LoanMarketplaceComponent } from "../../components/loan/loan-marketplace/loan-marketplace.component";
import { authGuard } from "../../service/api/auth.guard";
import { LoanListComponent } from "../../components/loan/loan-list/loan-list.component";
import { LoanApplyComponent } from "../../components/loan/loan-apply/loan-apply.component";
import { statusGuard } from "../../service/api/status.guard";


const routes: Routes = [
    {
        path: 'request',
        component: LoanRequestComponent,
        canActivate: [authGuard, statusGuard],
        data: { roles: ['LENDER', 'BORROWER'] }
    },
    {
        path: 'marketplace',
        component: LoanMarketplaceComponent,
        canActivate: [statusGuard]
    },
    {
        path: 'list',
        component: LoanListComponent,
        canActivate: [authGuard, statusGuard],
        data: { roles: ['LENDER', 'BORROWER'] }
    },
    {
        path: 'apply/:id',
        component: LoanApplyComponent,
        canActivate: [authGuard, statusGuard],
        data: { roles: ['LENDER', 'BORROWER'] }
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
