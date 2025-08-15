import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanListComponent } from "../../components/loan/loan-list/loan-list.component";


@NgModule({
  declarations: [
      LoanListComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
