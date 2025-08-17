import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { DashboardStatsDTO } from "../../dtos/dashboard/dashboard-stats.dto";
import { ReportReason } from "../../dtos/report/report-reason.enum";
import { RefundStatus } from "../../dtos/refund/refund-status.enum";
import { LoanStatusEnum } from "../../dtos/loan/loan-status.enum";
import { UserRole } from "../../dtos/user/user-role.enum";
import { UserStatus } from "../../dtos/user/user-status.enum";

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        const users = [
            { id: 1, firstName: 'Alice', lastName: 'Dupont', email: 'alice@example.com', password: 'secret', role: UserRole.LENDER, status: UserStatus.VALIDATED },
            { id: 2, firstName: 'Bob', lastName: 'Martin', email: 'bob@example.com', password: 'secret', role: UserRole.BORROWER, status: UserStatus.VALIDATED },
            { id: 3, firstName: 'Claire', lastName: 'Durand', email: 'claire@example.com', password: 'secret', role: UserRole.BORROWER, status: UserStatus.VALIDATED },
            { id: 4, firstName: 'David', lastName: 'Moreau', email: 'david@example.com', password: 'secret', role: UserRole.LENDER, status: UserStatus.VALIDATED }
        ];

        const loans = [
            { id: 1, reference: 'LN-2025-0002', amount: 5000, interestRate: 5, durationInMonths: 12, status: LoanStatusEnum.PENDING, lender: users[0] },
            { id: 2, reference: 'LN-2025-0002', amount: 10000, interestRate: 4, durationInMonths: 24, status: LoanStatusEnum.PENDING, lender: users[3] },

            { id: 3, reference: 'LN-2025-0003', amount: 7500, interestRate: 6, durationInMonths: 18, status: LoanStatusEnum.IN_PROGRESS, lender: users[0], borrower: users[2] },
            { id: 4, reference: 'LN-2025-0004', amount: 2000, interestRate: 7, durationInMonths: 6, status: LoanStatusEnum.IN_PROGRESS, lender: users[3], borrower: users[1] }
        ];

        const refunds = [
            { id: 1, loanReference: 'LN-2025-0002', refundDate: '2025-08-01', amount: 500, status: RefundStatus.APPROVED },
            { id: 2, loanReference: 'LN-2025-0002', refundDate: '2025-09-01', amount: 500, status: RefundStatus.PENDING },
            { id: 3, loanReference: 'LN-2025-0003', refundDate: '2025-09-10', amount: 800, status: RefundStatus.PENDING },
            { id: 4, loanReference: 'LN-2025-0004', refundDate: '2025-09-15', amount: 1200, status: RefundStatus.CANCELLED }
        ];


        const reports = [
            { id: 1, reason: ReportReason.FRAUD, reporterEmail: 'alice@example.com', reportedUserEmail: 'bob@example.com', reportDate: '2025-08-01', status: ReportReason.FRAUD },
            { id: 2, reason: ReportReason.SPAM, reporterEmail: 'claire@example.com', reportedUserEmail: 'alice@example.com', reportDate: '2025-08-05', status: ReportReason.SPAM }
        ];

        const dashboardStats: DashboardStatsDTO = {
            global: {
                totalFinanced: 1250000,
                totalRevenue: 21000,
                totalCustomers: 17,
                newCustomers: 4,
                loansInProgress: 134,
                loansRepaid: 89,
                refundsInProgress: 12
            },
            financial: {
                averageInterestRate: 4.5,
                defaultRate: 2.3,
                averageLoanDuration: 24
            },
            refunds: {
                monthlyRefunds: [
                    { month: '2025-01', refundedAmount: 600, expectedAmount: 800, lateAmount: 0, unpaidAmount: 1000 },
                    { month: '2025-02', refundedAmount: 1400, expectedAmount: 1650, lateAmount: 0, unpaidAmount: 700 },
                    { month: '2025-03', refundedAmount: 1700, expectedAmount: 1950, lateAmount: 0, unpaidAmount: 1200 },
                    { month: '2025-04', refundedAmount: 1100, expectedAmount: 1300, lateAmount: 0, unpaidAmount: 300 },
                    { month: '2025-05', refundedAmount: 1600, expectedAmount: 1900, lateAmount: 0, unpaidAmount: 0 },
                    { month: '2025-06', refundedAmount: 1700, expectedAmount: 1900, lateAmount: 200, unpaidAmount: 0 },
                    { month: '2025-07', refundedAmount: 2000, expectedAmount: 2200, lateAmount: 200, unpaidAmount: 0 },
                    { month: '2025-08', refundedAmount: 1850, expectedAmount: 2050, lateAmount: 200, unpaidAmount: 0 },
                    { month: '2025-09', refundedAmount: 0, expectedAmount: 2000, lateAmount: 0, unpaidAmount: 0 },
                    { month: '2025-10', refundedAmount: 0, expectedAmount: 2500, lateAmount: 0, unpaidAmount: 0 },
                    { month: '2025-11', refundedAmount: 0, expectedAmount: 1900, lateAmount: 0, unpaidAmount: 0 },
                    { month: '2025-12', refundedAmount: 0, expectedAmount: 450, lateAmount: 0, unpaidAmount: 0 }
                ],
                pendingRefundsAmount: 12000,
                expectedRevenueNextMonth: 1800,
                upcomingRefunds: [
                    { dueDate: '2025-09-15', amount: 450, borrower: 'Jean Dupont' },
                    { dueDate: '2025-09-20', amount: 800, borrower: 'Marie Curie' }
                ],
                lateRefunds: [
                    { refundId: 101, daysLate: 5, amount: 600, borrower: 'Jacques Durand' }
                ]
            },
            system: {
                alertsCount: 3,
                lastUpdate: new Date().toISOString()
            }
        };



        return { users, loans, refunds, dashboardStats };
    }

    genId<T extends { id: number }>(collection: T[]): number {
        return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
    }

    getRefunds() {
        return [];
    }
}
