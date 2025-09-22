import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoanResponseDTO } from "../../../dtos/loan/loan-response.dto";
import { environment } from "../../../../../environments/environment";
import { LayoutService } from "../../../../layout/service/app.layout.service";
import { AuthenticationService } from "../../../service/api/authentication.service";
import { ReportResponseDTO } from "../../../dtos/report/report.response.dto";
import { MENU_LABELS } from "../../constants/menu.constants";
import { UserStatus } from "../../../dtos/user/user-status.enum";
import { RefundStatus } from "../../../dtos/refund/refund-status.enum";
import { LoanStatusEnum } from "../../../dtos/loan/loan-status.enum";

@Component({
    selector: 'app-loan-apply',
    templateUrl: './loan-apply.component.html'
})
export class LoanApplyComponent implements OnInit {
    loan?: LoanResponseDTO;
    currentUserEmail?: string;
    alreadyReported: boolean = false;

    reportDialogVisible: boolean = false;
    reportReasons = [
        { label: 'Fraude', value: 'FRAUD' },
        { label: 'Spam', value: 'SPAM' },
        { label: 'Abus', value: 'ABUSE' },
        { label: 'Autre', value: 'OTHER' }
    ];
    selectedReason: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private layoutService: LayoutService,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        const loanId = this.route.snapshot.paramMap.get('id');
        this.currentUserEmail = this.authenticationService.getUserInfo().email;
        console.log(this.currentUserEmail)

        this.http.get<LoanResponseDTO>(`${environment.apiBaseUrl}/loans/${loanId}`)
            .subscribe(data => {
                this.loan = data;

                this.http.get<ReportResponseDTO[]>(`${environment.apiBaseUrl}/reports/user`).subscribe(reports => {
                    this.alreadyReported = reports.some(r =>
                        r.reportedLoanReference === this.loan?.reference && r.reporterEmail === this.currentUserEmail
                    );
                });
            });
    }


    applyForLoan() {
        if (!this.loan) return;

        const payload = { status: LoanStatusEnum.APPLIED, borrowerId: this.authenticationService.getUserInfo().id };

        this.http.patch<LoanResponseDTO>(
            `${environment.apiBaseUrl}/loans/${this.loan.id}`,
            payload
        ).subscribe(updatedLoan => {
            this.loan = updatedLoan;
        });
    }

    isAlreadySubscribed(): boolean {
        const userInfo = this.layoutService.getUserInfo();
        return this.loan?.borrower?.email === userInfo.email;
    }

    showReportDialog() {
        this.reportDialogVisible = true;
    }

    reportLoan() {
        if (!this.loan || !this.selectedReason) return;

        const payload = {
            reportedUserId: this.loan.lender.id,
            reportedLoanId: this.loan.id,
            reason: this.selectedReason
        };

        this.http.post(`${environment.apiBaseUrl}/reports`, payload).subscribe({
            next: () => {
                alert("Le prêt a bien été signalé. Merci pour votre vigilance !");
                this.reportDialogVisible = false;
                this.selectedReason = null;

                this.alreadyReported = true;
            },
            error: (err) => {
                console.error("Erreur lors du signalement", err);
            }
        });
    }

    protected readonly MENU_LABELS = MENU_LABELS;
}
