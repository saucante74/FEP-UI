import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthenticationService } from "../demo/service/api/authentication.service";
import { Router } from "@angular/router";
import { UserRole } from "../demo/dtos/user/user-role.enum";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        public authenticationService: AuthenticationService,
        public router: Router
    ) { }

    ngOnInit() {
        const role = this.authenticationService.getUserRole();

        this.model = [
            {
                label: 'Accueil',
                items: [
                    { label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                ]
            },
        ];

        if (UserRole.ADMIN === role) {
            this.model.push({
                label: 'Administration',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-th-large', routerLink: ['/admin/dashboard'] },
                    { label: 'Liste des prêts', icon: 'pi pi-bars', routerLink: ['/admin/loan/list'] },
                ]
            });
        }

        if (UserRole.LENDER === role || UserRole.BORROWER === role) {
            this.model.push({
                label: 'Pilotage',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-th-large', routerLink: ['/dashboard'] },
                    { label: 'Liste des remboursements', icon: 'pi pi-refresh', routerLink: ['/refund/list'] },
                ]
            });

            this.model.push({
                label: 'Marché',
                items: [
                    { label: 'Trouver un prêt', icon: 'pi pi-desktop', routerLink: ['/loan/marketplace'] },
                    { label: 'Proposer un prêt', icon: 'pi pi-plus', routerLink: ['/loan/request'] },
                ]
            });
        }

        this.model.push({
            label: 'Settings',
            items: [
                { label: 'Settings', icon: 'pi pi-fw pi-home', routerLink: ['/settings'] },
            ]
        });

        this.model.push({
            label: 'Déconnexion',
            items: [
                {
                    label: 'Déconnexion',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        this.authenticationService.logout();
                        this.router.navigate(['/auth/login']);
                    },
                    routerLink: ['/logout'],
                },
            ]
        });
    }
}
