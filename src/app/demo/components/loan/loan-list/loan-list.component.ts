import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { LayoutService } from "../../../../layout/service/app.layout.service";
import { LOAN_STATUSES } from "../../constants/loan.constants";
import { LoanStatusLabelPipe } from "../../../pipe/loan-status-label.pipe";

export interface LoanResponseDTO {
    id: number;
    amount: number;
    interestRate: number;
    durationInMonths: number;
    status: string;
    lender: { firstName: string; lastName: string };
    borrower: { firstName: string; lastName: string };
}

@Component({
    selector: 'app-loan-list',
    templateUrl: './loan-list.component.html',
})
export class LoanListComponent implements OnInit {
    loans: LoanResponseDTO[] = [];
    filteredLoans: LoanResponseDTO[] = [];

    first: number = 0;
    rows: number = 5;

    interestRateFilter: number | null = null;
    durationFilter: number | null = null;
    statusFilter: string = '';
    statuses = LOAN_STATUSES;
    userRole: string = '';

    constructor(private http: HttpClient, private layoutService: LayoutService) {}

    ngOnInit() {
        this.userRole = this.layoutService.getUserInfo().role;

        this.http.get<LoanResponseDTO[]>(`${environment.apiBaseUrl}/loans/user`).subscribe({
            next: (data) => {
                this.loans = data;
                console.log(data)
                this.filteredLoans = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /loans/user', err);
            }
        });
    }


    applyFilters() {
        this.filteredLoans = this.loans.filter(loan => {
            const matchesRate = this.interestRateFilter === null || loan.interestRate === this.interestRateFilter;
            const matchesDuration = this.durationFilter === null || loan.durationInMonths === this.durationFilter;
            const matchesStatus = this.statusFilter === '' || loan.status === this.statusFilter;
            return matchesRate && matchesDuration && matchesStatus;
        });
        this.reset();
    }

    resetFilters() {
        this.interestRateFilter = null;
        this.durationFilter = null;
        this.statusFilter = '';
        this.applyFilters();
    }

    next() { this.first += this.rows; }
    prev() { this.first -= this.rows; }
    reset() { this.first = 0; }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    protected readonly LoanStatusLabelPipe = LoanStatusLabelPipe;
}
