import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardStatsDTO } from "../../dtos/dashboard/dashboard-stats.dto";
import { environment } from "../../../../environments/environment";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
    stats!: DashboardStatsDTO;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<DashboardStatsDTO>(`${environment.apiBaseUrl}/admin/dashboard`).subscribe(data => {
            this.stats = data;
        });
    }
}
