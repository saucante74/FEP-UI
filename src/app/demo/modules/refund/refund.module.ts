import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundRoutingModule } from './refund-routing.module';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { RefundFormComponent } from "../../components/refund/refund-form/refund-form.component";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { RefundListComponent } from "../../components/refund/refund-list/refund-list.component";
import { RefundStatusLabelPipe } from "../../pipe/refund-status-label.pipe";


@NgModule({
    declarations: [
        RefundFormComponent,
        RefundListComponent,
        RefundStatusLabelPipe,
    ],
    imports: [
        CommonModule,
        RefundRoutingModule,
        ButtonModule,
        TableModule,
        DropdownModule,
        FormsModule,
        InputTextModule
    ],
    exports: [
        RefundStatusLabelPipe,
    ]
})
export class RefundModule { }
