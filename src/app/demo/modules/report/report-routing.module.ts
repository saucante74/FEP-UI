import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from '../../components/report/report-form/report-form.component';
import { ReportUserListComponent } from "../../components/report/report-list/report-list.component";

const routes: Routes = [
  { path: 'form', component: ReportFormComponent },
  { path: 'list', component: ReportUserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
