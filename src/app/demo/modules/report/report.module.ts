import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportFormComponent } from "../../components/report/report-form/report-form.component";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ReportUserListComponent } from "../../components/report/report-list/report-user-list.component";
import { TagModule } from "primeng/tag";
import { ReportReasonLabelPipe } from "../../pipe/report-reason-label.pipe";


@NgModule({
    declarations: [
        ReportUserListComponent,
        ReportFormComponent,
        ReportReasonLabelPipe
    ],
    exports: [
        ReportReasonLabelPipe
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ButtonModule,
        TableModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        TagModule,
    ]
})
export class ReportModule { }
