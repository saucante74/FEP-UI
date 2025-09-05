import { Component, OnInit } from '@angular/core';
import { AdminDashboardStats, StatisticsService } from "../../service/api/statistics.service";

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent implements OnInit {
    stats?: AdminDashboardStats;

    constructor(private statisticsService: StatisticsService) {}

    ngOnInit(): void {
        this.statisticsService.getAdminDashboardStats().subscribe(data => {
            this.stats = data;
            console.log('Admin dashboard stats', data);
        });
    }
}
