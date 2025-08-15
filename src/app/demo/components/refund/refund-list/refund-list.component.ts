import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RefundResponseDTO {
    id: number;
    loanId: number;
    amount: number;
    refundDate: string;
    status: string;
}

@Component({
    selector: 'app-refund-list',
    templateUrl: './refund-list.component.html',
    styleUrls: ['./refund-list.component.scss']
})
export class RefundListComponent implements OnInit {
    refunds: RefundResponseDTO[] = [];
    filteredRefunds: RefundResponseDTO[] = [];

    first: number = 0;
    rows: number = 5;

    loanIdFilter: number | null = null;
    statusFilter: string = '';

    statuses = [
        { name: 'TOUS', code: '' },
        { name: 'PENDING', code: 'PENDING' },
        { name: 'APPROVED', code: 'APPROVED' },
        { name: 'REJECTED', code: 'REJECTED' }
    ];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<RefundResponseDTO[]>('/api/refunds').subscribe({
            next: (data) => {
                this.refunds = data;
                this.filteredRefunds = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /api/refunds', err);
            }
        });
    }

    applyFilters() {
        this.filteredRefunds = this.refunds.filter(refund => {
            const matchesLoanId = this.loanIdFilter === null || refund.loanId === this.loanIdFilter;
            const matchesStatus = this.statusFilter === '' || refund.status === this.statusFilter;
            return matchesLoanId && matchesStatus;
        });
        this.reset();
    }

    resetFilters() {
        this.loanIdFilter = null;
        this.statusFilter = '';
        this.applyFilters();
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
        return this.filteredRefunds ? this.first >= (this.filteredRefunds.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
