import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { FormsModule } from "@angular/forms";
import { InputSwitchModule } from "primeng/inputswitch";
import { ButtonModule } from "primeng/button";
import { Configuration } from "../../api/configuration";
import { CURRENCIES_CODE, SettingHelper } from "../../helper/setting-helper";
import { NgForOf } from "@angular/common";

interface CurrencyConfiguration {
    icon: string,
    isSelected: boolean
}

@Component({
  selector: 'app-setting',
  standalone: true,
    imports: [
        DividerModule,
        FormsModule,
        InputSwitchModule,
        ButtonModule,
        NgForOf
    ],
  templateUrl: './setting.component.html',
})
export class SettingComponent {

    configuration: Configuration;

    currencies: CurrencyConfiguration[];

    constructor(
    ) { }

    ngOnInit() {
    }
}
