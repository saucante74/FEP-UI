import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoanResponseDTO } from "../../../dtos/loan/loan-response.dto";
import { environment } from "../../../../../environments/environment";
import { AuthenticationService } from "../../../service/api/authentication.service";
import { ReportResponseDTO } from "../../../dtos/report/report.response.dto";
import { MENU_LABELS } from "../../constants/menu.constants";
import { RefundResponseDTO } from "../../../dtos/refund/refund-response.dto";
import { LoanStatusEnum } from "../../../dtos/loan/loan-status.enum";
import { RefundStatus } from "../../../dtos/refund/refund-status.enum";
import { UserResponseDTO } from "../../../dtos/user/user-response.dto";
import { REPORT_REASONS } from "../../constants/report.constants";

@Component({
    selector: 'app-loan-detail',
    templateUrl: './loan-detail.component.html'
})
export class LoanDetailComponent implements OnInit {
    loan?: LoanResponseDTO;
    alreadyReported: boolean = false;
    refunds: RefundResponseDTO[] = [];
    currentUser: UserResponseDTO;
    reportDialogVisible: boolean = false;
    reportReasons = [{ code: '', label: 'Tous' }, ...REPORT_REASONS];
    selectedReason: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        const loanId = this.route.snapshot.paramMap.get('id');
        this.currentUser = this.authenticationService.getUserInfo();
        console.log(this.currentUser)

        this.http.get<LoanResponseDTO>(`${environment.apiBaseUrl}/loans/${loanId}`)
            .subscribe(data => {
                this.loan = data;

                this.http.get<RefundResponseDTO[]>(`${environment.apiBaseUrl}/refunds/loan/${loanId}`)
                    .subscribe(refunds => {
                        this.refunds = refunds;
                    });

                this.http.get<ReportResponseDTO[]>(`${environment.apiBaseUrl}/reports/user`)
                    .subscribe(reports => {
                        this.alreadyReported = reports.some(r =>
                            r.reportedLoanReference === this.loan?.reference &&
                            r.reporterEmail === this.currentUser.email
                        );
                    });
            });
    }


    applyForLoan() {
        if (!this.loan) return;
        const payload = { status: LoanStatusEnum.IN_PROGRESS };

        this.http.patch<LoanResponseDTO>(
            `${environment.apiBaseUrl}/loans/${this.loan.id}`,
            payload
        ).subscribe(updatedLoan => {
            this.loan = updatedLoan;
        });
    }

    isAlreadySubscribed(): boolean {
        return this.loan?.borrower?.email === this.currentUser.email;
    }

    canValidateBorrower(): boolean {
        return this.loan?.borrower?.email !== this.currentUser.email;
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

    validateRefund(refund: RefundResponseDTO) {
        const payload = { status: RefundStatus.SUBMITTED };

        this.http.patch<RefundResponseDTO>(
            `${environment.apiBaseUrl}/refunds/${refund.id}`,
            payload
        ).subscribe({
            next: (updatedRefund) => {
                this.refunds = this.refunds.map(r =>
                    r.id === updatedRefund.id ? updatedRefund : r
                );
                alert("Remboursement validé avec succès !");
            },
            error: (err) => {
                console.error("Erreur lors de la validation du remboursement", err);
                alert("Impossible de valider le remboursement. Réessayez plus tard.");
            }
        });
    }

    getNextRefundToValidate(): RefundResponseDTO | undefined {
        if (!this.refunds || this.refunds.length === 0) return undefined;

        return this.refunds
            .filter(r => r.status === RefundStatus.PENDING)
            .sort((a, b) =>
                new Date(a.refundDate).getTime() - new Date(b.refundDate).getTime()
            )[0];
    }

    getNextRefundToConfirm(): RefundResponseDTO | undefined {
        if (!this.refunds || this.refunds.length === 0) return undefined;

        return this.refunds
            .filter(r => r.status === RefundStatus.SUBMITTED)
            .sort((a, b) =>
                new Date(a.refundDate).getTime() - new Date(b.refundDate).getTime()
            )[0];
    }



    confirmRefund(refund: RefundResponseDTO) {
        const payload = { status: RefundStatus.APPROVED };

        this.http.patch<RefundResponseDTO>(
            `${environment.apiBaseUrl}/refunds/${refund.id}`,
            payload
        ).subscribe({
            next: (updatedRefund) => {
                this.refunds = this.refunds.map(r =>
                    r.id === updatedRefund.id ? updatedRefund : r
                );
                alert("Remboursement confirmé avec succès !");
            },
            error: (err) => {
                console.error("Erreur lors de la confirmation du remboursement", err);
                alert("Impossible de confirmer le remboursement. Réessayez plus tard.");
            }
        });
    }



    protected readonly MENU_LABELS = MENU_LABELS;
    protected readonly RefundStatus = RefundStatus;
    protected readonly LoanStatusEnum = LoanStatusEnum;
}
