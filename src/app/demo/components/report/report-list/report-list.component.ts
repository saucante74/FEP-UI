import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";

export interface ReportResponseDTO {
    id: number;
    reason: string;
    reporterEmail: string;
    reportedUserEmail: string;
    reportDate: string;
    open: boolean;
}

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
})
export class ReportUserListComponent implements OnInit {
    reports: ReportResponseDTO[] = [];
    filteredReports: ReportResponseDTO[] = [];

    first = 0;
    rows = 5;

    statusFilter: boolean | null = null;
    reasonFilter = '';

    statuses = [
        { name: 'Tous', code: null },
        { name: 'Ouvert', code: true },
        { name: 'Fermé', code: false }
    ];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<ReportResponseDTO[]>(`${environment.apiBaseUrl}/reports/user`).subscribe({
            next: (data) => {
                this.reports = data;
                this.filteredReports = [...data];
            },
            error: (err) => {
                console.error('Erreur lors du fetch /reports/user', err);
            }
        });
    }

    applyFilters() {
        this.filteredReports = this.reports.filter(report => {
            const matchesStatus = this.statusFilter === null || report.open === this.statusFilter;
            const matchesReason = !this.reasonFilter || report.reason.toLowerCase().includes(this.reasonFilter.toLowerCase());
            return matchesStatus && matchesReason;
        });
        this.reset();
    }

    resetFilters() {
        this.statusFilter = null;
        this.reasonFilter = '';
        this.applyFilters();
    }

    next() { this.first += this.rows; }
    prev() { this.first -= this.rows; }
    reset() { this.first = 0; }

    isLastPage(): boolean {
        return this.filteredReports ? this.first >= (this.filteredReports.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
