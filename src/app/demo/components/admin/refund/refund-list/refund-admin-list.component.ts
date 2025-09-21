import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../../environments/environment";

export interface RefundResponseDTO {
    id: number;
    loanReference: string;
    amount: number;
    refundDate: string;
    status: string;
}

@Component({
    selector: 'app-refund-list',
    templateUrl: './refund-admin-list.component.html',
})
export class RefundAdminListComponent implements OnInit {
    refunds: RefundResponseDTO[] = [];
    filteredRefunds: RefundResponseDTO[] = [];

    first: number = 0;
    rows: number = 5;

    loanReferenceFilter: string = '';
    statusFilter: string = '';

    statuses = [
      { name: 'Tous', code: '' },
      { name: 'En attente', code: 'PENDING' },
      { name: 'Soumis', code: 'SUBMITTED' },
      { name: 'Approuvé', code: 'APPROVED' },
      { name: 'Terminé', code: 'COMPLETED' },
      { name: 'Annulé', code: 'CANCELLED' },
      { name: 'Payé', code: 'PAID' },
      { name: 'En retard', code: 'LATE' }
    ];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<RefundResponseDTO[]>(`${environment.apiBaseUrl}/refunds`).subscribe({
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
            const matchesReference =
                this.loanReferenceFilter === '' || refund.loanReference.toLowerCase().includes(this.loanReferenceFilter.toLowerCase());
            const matchesStatus =
                this.statusFilter === '' || refund.status === this.statusFilter;
            return matchesReference && matchesStatus;
        });
        this.reset();
    }

    resetFilters() {
        this.loanReferenceFilter = '';
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
