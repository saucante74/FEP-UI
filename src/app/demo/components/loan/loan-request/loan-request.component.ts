import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { Router } from "@angular/router";

export interface LoanRequestDTO {
    amount: number;
    interestRate: number;
    durationInMonths: number;
}

@Component({
    selector: 'app-loan-request',
    templateUrl: './loan-request.component.html',
})
export class LoanRequestComponent {
    loan: LoanRequestDTO = {
        amount: 0,
        interestRate: 0,
        durationInMonths: 0
    };

    constructor(private http: HttpClient, private router: Router) {}

    submitLoan() {
        this.http.post(`${environment.apiBaseUrl}/loans`, this.loan).subscribe({
            next: (response) => {
                this.router.navigate(['/dashboard']);
            },
            error: (err) => {
                console.log(err)
            }
        });
    }
}
