import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from '../../components/loan/loan-list/loan-list.component';
import { LoanRequestComponent } from '../../components/loan/loan-request/loan-request.component';
import { LoanMarketplaceComponent } from "../../components/loan/loan-marketplace/loan-marketplace.component";


const routes: Routes = [
  { path: 'request', component: LoanRequestComponent },
  { path: 'list', component: LoanListComponent },
  { path: 'marketplace', component: LoanMarketplaceComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
