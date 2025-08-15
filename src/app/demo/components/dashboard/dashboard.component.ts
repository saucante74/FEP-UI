import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

interface responseAssetApiData {
    date: string,
    openValue: string
}

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor(
    ) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
