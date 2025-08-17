import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanListComponent } from "../../components/loan/loan-list/loan-list.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { LoanRequestComponent } from "../../components/loan/loan-request/loan-request.component";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";


@NgModule({
  declarations: [
      LoanListComponent,
      LoanRequestComponent,
  ],
    imports: [
        CommonModule,
        LoanRoutingModule,
        TableModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        InputTextModule
    ]
})
export class LoanModule { }
