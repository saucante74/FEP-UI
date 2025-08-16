import { ReportReason } from './report-reason.enum';

export interface ReportResponseDTO {
  id: number;
  reason: string;
  reporterEmail: string;
  reportedUserEmail: string;
  reportDate: string;
  status: ReportReason;
}
