export interface UserResponseDTO {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'LENDER' | 'BORROWER' | 'ADMIN';
    status: 'PENDING_VALIDATION' | 'VALIDATED' | 'DISABLED';
    createdAt: string;
    enabled: boolean;
    authorities: Authority[];
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
}

export interface Authority {
    authority: string;
}
