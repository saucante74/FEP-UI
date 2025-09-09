import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { Router } from "@angular/router";

export interface ReportRequestDTO {
    reason: string;
    reporterEmail: string;
    reportedUserEmail: string;
    reportDate: string;
    status: string;
}

@Component({
    selector: 'app-report-form',
    templateUrl: './report-form.component.html',
})
export class ReportFormComponent {
    report: ReportRequestDTO = {
        reason: '',
        reporterEmail: '',
        reportedUserEmail: '',
        reportDate: new Date().toISOString().split('T')[0],
        status: ''
    };

    reasons = [
        { name: 'FRAUD', code: 'FRAUD' },
        { name: 'SPAM', code: 'SPAM' },
        { name: 'HARASSMENT', code: 'HARASSMENT' }
    ];

    constructor(private http: HttpClient, private router: Router) {}

    submitReport() {
        this.http.post(`${environment.apiBaseUrl}/reports`, this.report).subscribe({
            next: (response) => {
                this.router.navigate(['/dashboard']);
            },
            error: (err) => {
                this.router.navigate(['/dashboard']);
            }
        });
    }
}
