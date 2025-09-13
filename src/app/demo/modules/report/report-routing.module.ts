import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from '../../components/report/report-form/report-form.component';
import { ReportUserListComponent } from "../../components/report/report-list/report-user-list.component";
import { statusGuard } from "../../service/api/status.guard";

const routes: Routes = [
  { path: 'form', component: ReportFormComponent, canActivate: [statusGuard] },
  { path: 'list', component: ReportUserListComponent, canActivate: [statusGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
