import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { LoanStatusEnum } from '../../models/loan/loan-status.enum';
import { RefundStatus } from '../../models/refund/refund-status.enum';
import { ReportReason } from '../../models/report/report-reason.enum';
import { UserRole } from '../../models/user/user-role.enum';
import { UserStatus } from '../../models/user/user-status.enum';
import { DashboardStatsDTO } from "../../models/dashboard/dashboard-stats.dto";

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const users = [];
        const loans = [];
        const refunds = this.getRefunds();

        const dashboardStats: DashboardStatsDTO = {
            totalFinanced: 1250000,
            totalRevenue: 21000,
            totalCustomers: 28441,
            newCustomers: 520,
            unreadComments: 152,
            respondedComments: 85,
            loansInProgress: 134,
            loansRepaid: 89,
            refundsInProgress: 12,
            lastUpdate: new Date().toISOString(),
            monthlyRefunds: [
                { month: '2025-01', totalAmount: 800 },
                { month: '2025-02', totalAmount: 1650 },
                { month: '2025-03', totalAmount: 1950 },
                { month: '2025-04', totalAmount: 1300 },
                { month: '2025-05', totalAmount: 1900 },
                { month: '2025-06', totalAmount: 1900 },
                { month: '2025-07', totalAmount: 2200 },
                { month: '2025-08', totalAmount: 2050 },
                { month: '2025-09', totalAmount: 2000 },
                { month: '2025-10', totalAmount: 2500 },
                { month: '2025-11', totalAmount: 1900 },
                { month: '2025-12', totalAmount: 450 }
            ]
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
