import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardViewComponent } from "../../components/admin/dashboard/admin-dashboard-view.component";
import { ChartModule } from "primeng/chart";
import { LoanAdminListComponent } from "../../components/admin/loan/loan-list/loan-admin-list.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { RefundAdminListComponent } from "../../components/admin/refund/refund-list/refund-admin-list.component";
import { ReportAdminListComponent } from "../../components/admin/report/report-list/report-admin-list.component";


@NgModule({
  declarations: [
      AdminDashboardViewComponent,
      LoanAdminListComponent,
      RefundAdminListComponent,
      ReportAdminListComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ChartModule,
        TableModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        InputTextModule
    ]
})
export class AdminModule { }
