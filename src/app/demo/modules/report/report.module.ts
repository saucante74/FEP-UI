import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportListComponent } from "../../components/report/report-list/report-list.component";
import { ReportFormComponent } from "../../components/report/report-form/report-form.component";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";


@NgModule({
  declarations: [
      ReportListComponent,
      ReportFormComponent
  ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ButtonModule,
        TableModule,
        DropdownModule,
        FormsModule,
        InputTextModule
    ]
})
export class ReportModule { }
