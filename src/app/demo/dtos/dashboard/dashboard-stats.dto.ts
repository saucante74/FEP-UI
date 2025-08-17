import { GlobalStatsDTO } from "./global-stats.dto";
import { FinancialStatsDTO } from "./financial-stats.dto";
import { RefundStatsDTO } from "./refund-stats.dto";
import { SystemStatsDTO } from "./system-stats.dto";

export interface DashboardStatsDTO {
    global: GlobalStatsDTO;
    financial: FinancialStatsDTO;
    refunds: RefundStatsDTO;
    system: SystemStatsDTO;
}
