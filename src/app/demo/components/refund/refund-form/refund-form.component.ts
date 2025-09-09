import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";

export interface RefundRequestDTO {
    loanId: number;
    amount: number;
    refundDate: string;
    status: string;
}

@Component({
    selector: 'app-refund-form',
    templateUrl: './refund-form.component.html',
})
export class RefundFormComponent {
    refund: RefundRequestDTO = {
        loanId: 0,
        amount: 0,
        refundDate: new Date().toISOString().split('T')[0],
        status: ''
    };

    statuses = [
        { name: 'PENDING', code: 'PENDING' },
        { name: 'APPROVED', code: 'APPROVED' },
        { name: 'REJECTED', code: 'REJECTED' }
    ];

    constructor(private http: HttpClient) {}

    submitRefund() {
        this.http.post(`${environment.apiBaseUrl}/refunds`, this.refund).subscribe({
            next: (response) => {
                console.log('Remboursement créé avec succès :', response);
            },
            error: (err) => {
                console.error('Erreur lors de la création du remboursement :', err);
            }
        });
    }
}
