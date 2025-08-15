import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from "./homepage-routing.module";
import { HomepageComponent } from "./homepage.component";
import { FormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { MenuModule } from "primeng/menu";
import { TableModule } from "primeng/table";
import { StyleClassModule } from "primeng/styleclass";
import { PanelMenuModule } from "primeng/panelmenu";
import { ButtonModule } from "primeng/button";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        HomepageRoutingModule,
    ],
    declarations: [
        HomepageComponent
    ]
})
export class HomepageModule { }
