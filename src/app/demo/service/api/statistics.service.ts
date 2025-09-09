import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";

export interface UserDashboardStats {
    totalUnpaidAmount: number;
    unpaidMonthsCount: number;
}

export interface AdminDashboardStats {
    totalUsers: number;
    totalLoans: number;
    totalRefunds: number;
    reportsOpen: number;
    revenue: number;
}

@Injectable({ providedIn: 'root' })
export class StatisticsService {
    private apiUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    getUserDashboardStats(): Observable<UserDashboardStats> {
        return this.http.get<UserDashboardStats>(`${this.apiUrl}/dashboardStats`);
    }

    getAdminDashboardStats(): Observable<AdminDashboardStats> {
        return this.http.get<AdminDashboardStats>(`${this.apiUrl}/admin/dashboardStats`);
    }
}
