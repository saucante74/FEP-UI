import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanAdminListComponent } from '../../components/admin/loan/loan-list/loan-admin-list.component';
import { LoanRequestComponent } from '../../components/loan/loan-request/loan-request.component';
import { LoanMarketplaceComponent } from "../../components/loan/loan-marketplace/loan-marketplace.component";
import { authGuard } from "../../service/api/auth.guard";


const routes: Routes = [
  {
      path: 'request',
      component: LoanRequestComponent,
      canActivate: [authGuard],
      data: { roles: ['LENDER', 'BORROWER'] }
  },
  {
      path: 'marketplace',
      component: LoanMarketplaceComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
