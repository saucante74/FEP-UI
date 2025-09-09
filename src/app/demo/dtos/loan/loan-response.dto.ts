import { UserResponseDTO } from "../user/user-response.dto";

export interface LoanResponseDTO {
    id: number;
    reference: string;
    amount: number;
    interestRate: number;
    durationInMonths: number;
    status: string;
    lender: UserResponseDTO;
    borrower?: UserResponseDTO;
}
