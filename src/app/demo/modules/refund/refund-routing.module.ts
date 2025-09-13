import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefundAdminListComponent } from '../../components/admin/refund/refund-list/refund-admin-list.component';
import { RefundFormComponent } from "../../components/refund/refund-form/refund-form.component";
import { RefundListComponent } from "../../components/refund/refund-list/refund-list.component";
import { statusGuard } from "../../service/api/status.guard";

const routes: Routes = [
  { path: 'list', component: RefundListComponent, canActivate: [statusGuard] },
  { path: 'request', component: RefundFormComponent, canActivate: [statusGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundRoutingModule { }
