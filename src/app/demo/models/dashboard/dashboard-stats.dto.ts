export interface DashboardStatsDTO {
    totalFinanced: number;
    totalRevenue: number;
    totalCustomers: number;
    newCustomers: number;
    unreadComments: number;
    respondedComments: number;
    loansInProgress: number;
    loansRepaid: number;
    refundsInProgress: number;
    lastUpdate: string;
    monthlyRefunds: {
        month: string;
        totalAmount: number;
    }[];
}
