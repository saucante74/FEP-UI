import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    first: number = 0;
    rows: number = 5;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<LoanResponseDTO[]>('/api/loans').subscribe({
            next: (data) => {
                console.log('Données mockées /api/loans :', data);
                this.loans = data;
            },
            error: (err) => {
                console.error('Erreur lors du fetch /api/loans', err);
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
        return this.loans ? this.first >= (this.loans.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
