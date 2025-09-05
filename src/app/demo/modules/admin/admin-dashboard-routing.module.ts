import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardViewComponent } from '../../components/tdb/dashboard-view/admin-dashboard-view.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
