import { UserResponseDTO } from "../user/user-response.dto";

export interface LoanResponseDTO {
    reference: string;
    amount: number;
    interestRate: number;
    durationInMonths: number;
    status: string;
    lender: UserResponseDTO;
    borrower?: UserResponseDTO;
}
