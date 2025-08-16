import { RefundStatus } from './refund-status.enum';

export interface RefundResponseDTO {
  id: number;
  amount: number;
  refundDate: string;
  status: RefundStatus;
  loanId: number;
}
