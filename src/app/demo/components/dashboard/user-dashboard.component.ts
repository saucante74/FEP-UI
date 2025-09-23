import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { UserDashboardStatsDTO } from "../../dtos/dashboard/user-dashboard-stats.dto";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent implements OnInit {
    stats?: UserDashboardStatsDTO;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<UserDashboardStatsDTO>(`${environment.apiBaseUrl}/user/dashboard`).subscribe(data => {
            this.stats = data;
            console.log(data)
        });
    }
}
