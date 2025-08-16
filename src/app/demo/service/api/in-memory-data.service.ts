import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { DashboardStatsDTO } from "../../dtos/dashboard/dashboard-stats.dto";

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const users = [];
        const loans = [];
        const refunds = this.getRefunds();

        const dashboardStats: DashboardStatsDTO = {
            global: {
                totalFinanced: 1250000,
                totalRevenue: 21000,
                totalCustomers: 28441,
                newCustomers: 520,
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
                    { month: '2025-01', refundedAmount: 600, expectedAmount: 800, lateAmount: 200 },
                    { month: '2025-02', refundedAmount: 1400, expectedAmount: 1650, lateAmount: 250 },
                    { month: '2025-03', refundedAmount: 1700, expectedAmount: 1950, lateAmount: 250 },
                    { month: '2025-04', refundedAmount: 1100, expectedAmount: 1300, lateAmount: 200 },
                    { month: '2025-05', refundedAmount: 1600, expectedAmount: 1900, lateAmount: 300 },
                    { month: '2025-06', refundedAmount: 1700, expectedAmount: 1900, lateAmount: 200 },
                    { month: '2025-07', refundedAmount: 2000, expectedAmount: 2200, lateAmount: 200 },
                    { month: '2025-08', refundedAmount: 1850, expectedAmount: 2050, lateAmount: 200 },
                    { month: '2025-09', refundedAmount: 1750, expectedAmount: 2000, lateAmount: 250 },
                    { month: '2025-10', refundedAmount: 2300, expectedAmount: 2500, lateAmount: 200 },
                    { month: '2025-11', refundedAmount: 1700, expectedAmount: 1900, lateAmount: 200 },
                    { month: '2025-12', refundedAmount: 300, expectedAmount: 450, lateAmount: 150 }
                ],
                pendingRefundsAmount: 12000,
                expectedRevenueNextMonth: 1800,
                upcomingRefunds: [
                    { dueDate: '2025-09-15', amount: 450, borrower: 'Jean Dupont' },
                    { dueDate: '2025-09-20', amount: 800, borrower: 'Marie Curie' }
                ],
                lateRefunds: [
                    { refundId: 101, daysLate: 5, amount: 600, borrower: 'Ali Karim' }
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
