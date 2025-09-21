import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { UserResponseDTO } from "../../../dtos/user/user-response.dto";
import { UserStatus } from "../../../dtos/user/user-status.enum";
import { LoanResponseDTO } from "../../../dtos/loan/loan-response.dto";
import { LoanStatusEnum } from "../../../dtos/loan/loan-status.enum";

@Component({
    selector: 'app-pending-users',
    templateUrl: './pending-users.component.html'
})
export class PendingUsersComponent implements OnInit {
    pendingUsers: UserResponseDTO[] = [];
    pendingLoans: LoanResponseDTO[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchPendingUsers();
        this.fetchPendingLoans();
    }

    fetchPendingUsers(): void {
        this.http.get<UserResponseDTO[]>(`${environment.apiBaseUrl}/users`).subscribe(data => {
            this.pendingUsers = data.filter(u => u.status == UserStatus.PENDING_VALIDATION);
        });

    }

    validateUser(userId: number): void {
        const payload = { status: UserStatus.VALIDATED };

        this.http.patch(`${environment.apiBaseUrl}/users/${userId}`, payload).subscribe({
            next: () => {
                this.pendingUsers = this.pendingUsers.filter(u => u.id !== userId);
                window.location.reload();
            }
        });
    }

  rejectUser(userId: number): void {
    const payload = { status: UserStatus.REJECTED };

    this.http.patch(`${environment.apiBaseUrl}/users/${userId}`, payload).subscribe({
      next: () => {
        this.pendingUsers = this.pendingUsers.filter(u => u.id !== userId);
          window.location.reload();
      }
    });
  }

    fetchPendingLoans(): void {
        this.http.get<LoanResponseDTO[]>(`${environment.apiBaseUrl}/loans`).subscribe(data => {
            console.log(data)
            this.pendingLoans = data.filter(l => l.status == LoanStatusEnum.PENDING);
        });
    }

    validateLoan(loanId: number): void {
        const payload = { status: LoanStatusEnum.VALIDATED };
        this.http.patch(`${environment.apiBaseUrl}/loans/${loanId}`, payload).subscribe({
            next: () => {
                this.pendingLoans = this.pendingLoans.filter(l => l.id !== loanId);
            }
        });
        window.location.reload();
    }

    rejectLoan(loanId: number): void {
        const payload = { status: LoanStatusEnum.REJECTED, borrowerId: null };
        this.http.patch(`${environment.apiBaseUrl}/loans/${loanId}`, payload).subscribe({
            next: () => {
                this.pendingLoans = this.pendingLoans.filter(l => l.id !== loanId);
            }
        });
        window.location.reload();
    }

}
