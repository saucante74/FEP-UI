import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDashboardStatsDto } from "../../dtos/dashboard/admin-dashboard-stats.dto";
import { environment } from "../../../../environments/environment";
import { UserDashboardStatsDTO } from "../../dtos/dashboard/user-dashboard-stats.dto";
import { AuthenticationService } from "../../service/api/authentication.service";
import { UserRole } from "../../dtos/user/user-role.enum";
import { Router } from "@angular/router";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
    stats!: AdminDashboardStatsDto|UserDashboardStatsDTO;
    role: string;

    constructor(private http: HttpClient, private authService: AuthenticationService, private router: Router) {}

    ngOnInit() {
      setTimeout(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }, 0);

        this.role = this.authService.getUserRole();

        if (UserRole.ADMIN === this.role) {
            this.http.get<AdminDashboardStatsDto>(`${environment.apiBaseUrl}/admin/dashboard`)
                .subscribe(data => this.stats = data);
        } else {
            this.http.get<UserDashboardStatsDTO>(`${environment.apiBaseUrl}/user/dashboard`)
                .subscribe(data => this.stats = data);
        }
    }

}
