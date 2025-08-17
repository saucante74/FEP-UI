import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefundListComponent } from '../../components/refund/refund-list/refund-list.component';
import { RefundFormComponent } from "../../components/refund/refund-form/refund-form.component";

const routes: Routes = [
  { path: 'list', component: RefundListComponent },
  { path: 'request', component: RefundFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundRoutingModule { }
