import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ChartModule } from "primeng/chart";
import { LoanAdminListComponent } from "../../components/admin/loan/loan-list/loan-admin-list.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { RefundAdminListComponent } from "../../components/admin/refund/refund-list/refund-admin-list.component";
import { ReportAdminListComponent } from "../../components/admin/report/report-list/report-admin-list.component";
import { PendingUsersComponent } from "../../components/admin/pending-users/pending-users.component";
import { TagModule } from "primeng/tag";
import { AppLayoutModule } from "../../../layout/app.layout.module";
import { AdminDashboardComponent } from "../../components/admin/dashboard/admin-dashboard.component";
import { LoanModule } from "../loan/loan.module";
import { RefundModule } from "../refund/refund.module";


@NgModule({
    declarations: [
        AdminDashboardComponent,
        LoanAdminListComponent,
        RefundAdminListComponent,
        ReportAdminListComponent,
        PendingUsersComponent,
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    TagModule,
    AppLayoutModule,
    LoanModule,
    RefundModule
  ]
})
export class AdminModule { }
