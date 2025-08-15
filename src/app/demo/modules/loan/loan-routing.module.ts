import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from '../../components/loan/loan-list/loan-list.component';
import { LoanRequestComponent } from '../../components/loan/loan-request/loan-request.component';


const routes: Routes = [
  { path: 'request', component: LoanRequestComponent },
  { path: 'list', component: LoanListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
