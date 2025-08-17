import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from "../../components/tdb/dashboard-view/dashboard-view.component";
import { ChartModule } from "primeng/chart";


@NgModule({
  declarations: [
      DashboardViewComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartModule
    ]
})
export class DashboardModule { }
