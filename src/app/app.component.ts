import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppConfig, LayoutService } from "./layout/service/app.layout.service";
import {
    DARK_COLORSCHEME,
    INPUT_STYLE, LIGHT_COLORSCHEME,
    MENU_MODE,
    RIPPLE,
    SCALE_VALUE
} from "./layout/config/config.constants";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        const theme = this.layoutService.loadThemeFromLocalStorage();

        const config: AppConfig = {
            ripple: RIPPLE,
            inputStyle: INPUT_STYLE,
            menuMode: MENU_MODE,
            colorScheme: LIGHT_COLORSCHEME,
            theme: theme,
            scale: SCALE_VALUE
        };
        this.layoutService.config.set(config);
    }
}
