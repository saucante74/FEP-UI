import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { LoanStatusEnum } from '../../models/loan/loan-status.enum';
import { RefundStatus } from '../../models/refund/refund-status.enum';
import { ReportReason } from '../../models/report/report-reason.enum';
import { UserRole } from '../../models/user/user-role.enum';
import { UserStatus } from '../../models/user/user-status.enum';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const users = [
            { id: 1, firstName: 'Alice', lastName: 'Dupont', email: 'alice@example.com', password: 'secret', role: UserRole.BORROWER, status: UserStatus.VALIDATED },
            { id: 2, firstName: 'Bob', lastName: 'Martin', email: 'bob@example.com', password: 'secret', role: UserRole.LENDER, status: UserStatus.VALIDATED },
            { id: 3, firstName: 'Claire', lastName: 'Durand', email: 'claire@example.com', password: 'secret', role: UserRole.ADMIN, status: UserStatus.VALIDATED }
        ];

        const loans = [
            { id: 1, amount: 5000, interestRate: 5, durationInMonths: 12, status: LoanStatusEnum.PENDING, borrowerId: 1 },
            { id: 2, amount: 10000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.IN_PROGRESS, borrowerId: 2 },
            { id: 3, amount: 12000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.IN_PROGRESS, borrowerId: 2 },
            { id: 4, amount: 14000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.IN_PROGRESS, borrowerId: 2 },
            { id: 5, amount: 1000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.IN_PROGRESS, borrowerId: 3 },
            { id: 6, amount: 17000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.IN_PROGRESS, borrowerId: 2 },
            { id: 7, amount: 10000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.IN_PROGRESS, borrowerId: 4 },
        ];

        const refunds = [
            { id: 1, loanId: 2, amount: 500, refundDate: '2025-08-01', status: RefundStatus.APPROVED },
            { id: 2, loanId: 2, amount: 500, refundDate: '2025-09-01', status: RefundStatus.PENDING }
        ];

        const reports = [
            { id: 1, reason: ReportReason.FRAUD, reporterEmail: 'alice@example.com', reportedUserEmail: 'bob@example.com', reportDate: '2025-08-01', status: ReportReason.FRAUD },
            { id: 2, reason: ReportReason.SPAM, reporterEmail: 'claire@example.com', reportedUserEmail: 'alice@example.com', reportDate: '2025-08-05', status: ReportReason.SPAM }
        ];

        return { users, loans, refunds, reports };
    }

    genId<T extends { id: number }>(collection: T[]): number {
        return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
    }
}
