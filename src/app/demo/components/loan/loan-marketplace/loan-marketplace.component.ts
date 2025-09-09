import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanResponseDTO } from '../../../dtos/loan/loan-response.dto';
import { environment } from "../../../../../environments/environment";

@Component({
    selector: 'app-loan-marketplace',
    templateUrl: './loan-marketplace.component.html'
})
export class LoanMarketplaceComponent implements OnInit {
    loans: LoanResponseDTO[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<LoanResponseDTO[]>(`${environment.apiBaseUrl}/loans`).subscribe(data => {
            this.loans = data.filter(l => l.status === 'PENDING');
        });
    }

    applyForLoan(loan: LoanResponseDTO) {
        alert(`Vous avez postulé pour un prêt de ${loan.amount} € avec ${loan.interestRate}% sur ${loan.durationInMonths} mois.`);
    }
}
