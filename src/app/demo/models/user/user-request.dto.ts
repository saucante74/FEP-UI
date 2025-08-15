import { UserRole } from './user-role.enum';

export interface UserRequestDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}
