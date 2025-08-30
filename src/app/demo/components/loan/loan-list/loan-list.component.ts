import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";

export interface LoanResponseDTO {
    amount: number;
    interestRate: number;
    durationInMonths: number;
    status: string;
    borrowerId: number;
}

@Component({
    selector: 'app-loan-list',
    templateUrl: './loan-list.component.html',
    styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
    loans: LoanResponseDTO[] = [];
    filteredLoans: LoanResponseDTO[] = [];

    first: number = 0;
    rows: number = 5;

    interestRateFilter: number | null = null;
    durationFilter: number | null = null;
    statusFilter: string = '';

    statuses = [
        { name: 'TOUS', code: '' },
        { name: 'PENDING', code: 'PENDING' },
        { name: 'IN_PROGRESS', code: 'IN_PROGRESS' },
        { name: 'COMPLETED', code: 'COMPLETED' }
    ];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<LoanResponseDTO[]>(`${environment.apiBaseUrl}/loans`).subscribe({
            next: (data) => {
                console.log(data)
                this.loans = data;
                this.filteredLoans = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /api/loans', err);
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

    isLastPage(): boolean {
        return this.filteredLoans ? this.first >= (this.filteredLoans.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
