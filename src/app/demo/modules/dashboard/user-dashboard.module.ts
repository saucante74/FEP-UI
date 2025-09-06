import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { UserDashboardComponent } from "../../components/dashboard/user-dashboard.component";
import { UserModule } from "../user/user-module";
import { FrenchDatePipe } from "../../pipe/french-date.pipe";

@NgModule({
    declarations: [
        UserDashboardComponent,
        FrenchDatePipe
    ],
    imports: [
        CommonModule,
        UserDashboardRoutingModule,
        CardModule,
        TableModule,
        ChartModule,
        UserModule
    ],
    exports: [
        FrenchDatePipe
    ]
})
export class UserDashboardModule {}
