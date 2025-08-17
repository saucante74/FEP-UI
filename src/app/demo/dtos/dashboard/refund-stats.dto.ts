export interface MonthlyRefundDTO {
    month: string;
    refundedAmount: number;
    expectedAmount: number;
    lateAmount: number;
    unpaidAmount: number;
}

export interface UpcomingRefundDTO {
    dueDate: string;
    amount: number;
    borrower: string;
}

export interface LateRefundDTO {
    refundId: number;
    daysLate: number;
    amount: number;
    borrower: string;
}

export interface RefundStatsDTO {
    monthlyRefunds: MonthlyRefundDTO[];
    pendingRefundsAmount: number;
    expectedRevenueNextMonth: number;
    upcomingRefunds: UpcomingRefundDTO[];
    lateRefunds: LateRefundDTO[];
}
