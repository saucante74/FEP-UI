import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportResponseDTO } from '../../../../dtos/report/report.response.dto';
import { environment } from "../../../../../../environments/environment";

@Component({
    selector: 'app-report-list',
    templateUrl: './report-admin-list.component.html',
})
export class ReportAdminListComponent implements OnInit {
    reports: ReportResponseDTO[] = [];
    filteredReports: ReportResponseDTO[] = [];

    first: number = 0;
    rows: number = 5;

    reasonFilter: string = '';
    statusFilter: string = '';
    startDateFilter: string = '';
    endDateFilter: string = '';

    reasons = [
        { name: 'TOUS', code: '' },
        { name: 'FRAUD', code: 'FRAUD' },
        { name: 'SPAM', code: 'SPAM' },
        { name: 'HARASSMENT', code: 'HARASSMENT' }
    ];

    statuses = [
        { name: 'TOUS', code: '' },
        { name: 'FRAUD', code: 'FRAUD' },
        { name: 'SPAM', code: 'SPAM' },
        { name: 'HARASSMENT', code: 'HARASSMENT' }
    ];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<ReportResponseDTO[]>(`${environment.apiBaseUrl}/reports`).subscribe({
            next: (data) => {
                this.reports = data;
                this.filteredReports = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /api/reports', err);
            }
        });
    }

    applyFilters() {
        this.filteredReports = this.reports.filter(report => {
            const matchesReason = this.reasonFilter === '' || report.reason === this.reasonFilter;
            const matchesStatus = this.statusFilter === '' || report.status === this.statusFilter;
            const matchesStartDate = this.startDateFilter === '' || new Date(report.reportDate) >= new Date(this.startDateFilter);
            const matchesEndDate = this.endDateFilter === '' || new Date(report.reportDate) <= new Date(this.endDateFilter);
            return matchesReason && matchesStatus && matchesStartDate && matchesEndDate;
        });
        this.reset();
    }

    resetFilters() {
        this.reasonFilter = '';
        this.statusFilter = '';
        this.startDateFilter = '';
        this.endDateFilter = '';
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
