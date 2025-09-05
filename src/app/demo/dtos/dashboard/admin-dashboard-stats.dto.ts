import { GlobalStatsDTO } from "../statistic/global-stats.dto";
import { FinancialStatsDTO } from "../statistic/financial-stats.dto";
import { RefundStatsDTO } from "../statistic/refund-stats.dto";
import { SystemStatsDTO } from "../statistic/system-stats.dto";

export interface AdminDashboardStatsDto {
    global: GlobalStatsDTO;
    financial: FinancialStatsDTO;
    refunds: RefundStatsDTO;
    system: SystemStatsDTO;
}
