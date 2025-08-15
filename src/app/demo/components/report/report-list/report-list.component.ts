import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportResponseDTO } from "../../../models/report/report.response.dto";

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
    reports: ReportResponseDTO[] = [];
    first: number = 0;
    rows: number = 5;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<ReportResponseDTO[]>('/api/reports').subscribe({
            next: (data) => {
                console.log('Données mockées /api/reports :', data);
                this.reports = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /api/reports', err);
            }
        });
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.reports ? this.first >= (this.reports.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
