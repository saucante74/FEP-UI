import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardViewComponent } from "../../components/tdb/dashboard-view/admin-dashboard-view.component";
import { ChartModule } from "primeng/chart";


@NgModule({
  declarations: [
      AdminDashboardViewComponent
  ],
    imports: [
        CommonModule,
        AdminDashboardRoutingModule,
        ChartModule
    ]
})
export class AdminDashboardModule { }
