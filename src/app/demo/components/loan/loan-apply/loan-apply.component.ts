import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoanResponseDTO } from "../../../dtos/loan/loan-response.dto";
import { environment } from "../../../../../environments/environment";
import { LayoutService } from "../../../../layout/service/app.layout.service";

@Component({
    selector: 'app-loan-apply',
    templateUrl: './loan-apply.component.html'
})
export class LoanApplyComponent implements OnInit {
    loan?: LoanResponseDTO;
    currentUserEmail?: string;

    constructor(private route: ActivatedRoute, private http: HttpClient, private layoutService: LayoutService) {}

    ngOnInit() {
        const loanId = this.route.snapshot.paramMap.get('id');

        this.http.get<LoanResponseDTO>(`${environment.apiBaseUrl}/loans/${loanId}`)
            .subscribe(data => this.loan = data);

        this.http.get<{ email: string }>(`${environment.apiBaseUrl}/users/me`)
            .subscribe(user => this.currentUserEmail = user.email);
    }

    applyForLoan() {
        if (!this.loan) return;

        this.http.patch<LoanResponseDTO>(
            `${environment.apiBaseUrl}/loans/${this.loan.id}`,
            {}
        ).subscribe(updatedLoan => {
            this.loan = updatedLoan;
        });
    }

    isAlreadySubscribed(): boolean {
        const userInfo = this.layoutService.getUserInfo();
        return this.loan?.borrower?.email === userInfo.email;
    }
}
