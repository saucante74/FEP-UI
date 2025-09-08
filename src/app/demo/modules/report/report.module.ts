import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportFormComponent } from "../../components/report/report-form/report-form.component";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ReportUserListComponent } from "../../components/report/report-list/report-list.component";
import { TagModule } from "primeng/tag";


@NgModule({
  declarations: [
      ReportUserListComponent,
      ReportFormComponent
  ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ButtonModule,
        TableModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        TagModule
    ]
})
export class ReportModule { }
