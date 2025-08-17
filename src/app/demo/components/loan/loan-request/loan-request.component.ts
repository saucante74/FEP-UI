import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LoanRequestDTO {
    amount: number;
    interestRate: number;
    durationInMonths: number;
    status: string;
    borrowerId: number;
}

@Component({
    selector: 'app-loan-request',
    templateUrl: './loan-request.component.html',
    styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent {
    loan: LoanRequestDTO = {
        amount: 0,
        interestRate: 0,
        durationInMonths: 0,
        status: '',
        borrowerId: 0
    };

    statuses = [
        { name: 'EN_ATTENTE', code: 'EN_ATTENTE' },
        { name: 'APPROUVE', code: 'APPROUVE' },
        { name: 'REFUSE', code: 'REFUSE' }
    ];

    constructor(private http: HttpClient) {}

    submitLoan() {
        this.http.post('/api/loans', this.loan).subscribe({
            next: (response) => {
                console.log('Prêt créé avec succès :', response);
            },
            error: (err) => {
                console.error('Erreur lors de la création du prêt :', err);
            }
        });
    }
}
