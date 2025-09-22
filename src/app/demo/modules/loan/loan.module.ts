import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRoutingModule } from './loan-routing.module';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { LoanRequestComponent } from "../../components/loan/loan-request/loan-request.component";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { LoanMarketplaceComponent } from "../../components/loan/loan-marketplace/loan-marketplace.component";
import { LoanListComponent } from "../../components/loan/loan-list/loan-list.component";
import { StatusLabelPipe } from "../../pipe/status-label.pipe";
import { LoanApplyComponent } from "../../components/loan/loan-apply/loan-apply.component";
import { DialogModule } from "primeng/dialog";
import { LoanDetailComponent } from "../../components/loan/loan-detail/loan-detail.component";
import { TagModule } from "primeng/tag";


@NgModule({
  declarations: [
      LoanRequestComponent,
      LoanMarketplaceComponent,
      LoanListComponent,
      LoanApplyComponent,
      LoanDetailComponent,
      StatusLabelPipe,
  ],
    imports: [
        CommonModule,
        LoanRoutingModule,
        TableModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        DialogModule,
        TagModule
    ],
    exports: [
        StatusLabelPipe
    ]

})
export class LoanModule { }
