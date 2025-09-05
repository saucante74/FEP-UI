export interface UserDashboardStatsDTO {
    totalAmount: number;
    amountLabel: string;
    totalInterests: number;
    interestsLabel: string;
    activeLoansAmount: number;
    totalLoansCount: number;
    totalRefundsMade: number;
    totalRefundsReceived: number;
    loansInProgress: number;
    lateRefundsCount: number;
    upcomingRefunds: UpcomingRefundDTO[];
}

export interface UpcomingRefundDTO {
    dueDate: string;
    amount: number;
    status: string;
    counterparty: string;
}
