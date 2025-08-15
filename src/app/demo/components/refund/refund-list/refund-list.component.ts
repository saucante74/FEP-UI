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
    first: number = 0;
    rows: number = 5;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<RefundResponseDTO[]>('/api/refunds').subscribe({
            next: (data) => {
                console.log('Données mockées /api/refunds :', data);
                this.refunds = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /api/refunds', err);
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
        return this.refunds ? this.first >= (this.refunds.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
