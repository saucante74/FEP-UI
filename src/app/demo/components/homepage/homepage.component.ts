import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardStatsDTO } from "../../dtos/dashboard/dashboard-stats.dto";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
    stats!: DashboardStatsDTO;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<DashboardStatsDTO>('/api/dashboardStats').subscribe(data => {
            this.stats = data;
        });
    }
}
