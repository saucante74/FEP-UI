export interface LoanRequestDTO {
  amount: number;
  interestRate: number;
  durationInMonths: number;
  status: string;
  borrowerId: number;
}
