import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundRoutingModule } from './refund-routing.module';
import { RefundListComponent } from "../../components/refund/refund-list/refund-list.component";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";


@NgModule({
  declarations: [
      RefundListComponent
  ],
    imports: [
        CommonModule,
        RefundRoutingModule,
        ButtonModule,
        TableModule
    ]
})
export class RefundModule { }
