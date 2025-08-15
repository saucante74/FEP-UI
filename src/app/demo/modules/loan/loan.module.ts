import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanListComponent } from "../../components/loan/loan-list/loan-list.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";


@NgModule({
  declarations: [
      LoanListComponent
  ],
    imports: [
        CommonModule,
        LoanRoutingModule,
        TableModule,
        ButtonModule
    ]
})
export class LoanModule { }
