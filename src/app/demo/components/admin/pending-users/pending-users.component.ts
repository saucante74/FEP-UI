import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { UserResponseDTO } from "../../../dtos/user/user-response.dto";
import { UserStatus } from "../../../dtos/user/user-status.enum";
import { Router } from "@angular/router";

interface PendingUserDTO {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
}

@Component({
    selector: 'app-pending-users',
    templateUrl: './pending-users.component.html'
})
export class PendingUsersComponent implements OnInit {
    pendingUsers: UserResponseDTO[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchPendingUsers();
    }

    fetchPendingUsers(): void {
        this.http.get<UserResponseDTO[]>(`${environment.apiBaseUrl}/users`).subscribe(data => {
            this.pendingUsers = data.filter(u => u.status !== 'VALIDATED');
        });

    }

    validateUser(userId: number): void {
        const payload = { status: UserStatus.VALIDATED };

        this.http.patch(`${environment.apiBaseUrl}/users/${userId}`, payload).subscribe({
            next: () => {
                this.pendingUsers = this.pendingUsers.filter(u => u.id !== userId);
                window.location.reload();
            }
        });
    }

}
