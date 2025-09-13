import { ReportReason } from './report-reason.enum';

export interface ReportResponseDTO {
  id: number;
  reason: string;
  reporterEmail: string;
  reporterId: number;
  reportedUserEmail: string;
  reportedUserId: number;
  reportedLoanReference: string;
  reportedLoanId: number;
  reportDate: string;
  open: boolean;
  status: ReportReason;
}
