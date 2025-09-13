import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportResponseDTO } from '../../../../dtos/report/report.response.dto';
import { environment } from "../../../../../../environments/environment";
import { REPORT_REASONS, REPORT_STATUSES } from "../../../constants/report.constants";
import { UserStatus } from "../../../../dtos/user/user-status.enum";
import { forkJoin } from "rxjs";

@Component({
    selector: 'app-report-list',
    templateUrl: './report-admin-list.component.html',
})
export class ReportAdminListComponent implements OnInit {
    reports: ReportResponseDTO[] = [];
    filteredReports: ReportResponseDTO[] = [];

    first = 0;
    rows = 5;

    reasonFilter: string = '';
    statusFilter: string = '';
    startDateFilter: string = '';
    endDateFilter: string = '';

    reasons = [{ code: '', label: 'Tous' }, ...REPORT_REASONS];
    statuses = [{ code: null, label: 'Tous' }, ...REPORT_STATUSES];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        console.log('REPORT_REASONS', this.reasons);

        this.http.get<ReportResponseDTO[]>(`${environment.apiBaseUrl}/reports`).subscribe({
            next: (data) => {
                this.reports = data;
                this.filteredReports = data;
            },
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


    blockUser(userId: number, reportId: number) {
        const userPayload = { status: UserStatus.BLOCKED };
        const reportPayload = { isOpen: false };

        const blockUser$ = this.http.patch(`${environment.apiBaseUrl}/users/${userId}`, userPayload);
        const closeReport$ = this.http.patch(`${environment.apiBaseUrl}/reports/${reportId}`, reportPayload);

        forkJoin([blockUser$, closeReport$]).subscribe({
            next: ([userRes, reportRes]) => {
                alert(`Utilisateur bloqué et rapport fermé avec succès.`);
                window.location.reload();
            },
            error: (err) => {
                alert(`Échec du blocage ou de la fermeture du rapport.`);
            }
        });
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
