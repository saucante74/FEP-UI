import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthenticationService } from "../demo/service/api/authentication.service";
import { Router } from "@angular/router";

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
        this.model = [
            {
                label: 'Accueil',
                items: [
                    { label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/'] },

                ]
            },
            {
                label: 'Admin',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-th-large', routerLink: ['/admin/dashboard'] },

                ]
            },
            {
                label: 'Pilotage',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-th-large', routerLink: ['/dashboard'] },
                    { label: 'Liste des prêts', icon: 'pi pi-bars', routerLink: ['/loan/list'] },
                    { label: 'Liste des remboursements', icon: 'pi pi-refresh', routerLink: ['/refund/list'] },

                ]
            },
            {
                label: 'Marché',
                items: [
                    { label: 'Trouver un prêt', icon: 'pi pi-desktop', routerLink: ['/loan/marketplace'] },
                    { label: 'Proposer un prêt', icon: 'pi pi-plus', routerLink: ['/loan/request'] },
                ]
            },
            // {
            //     label: 'Signalements',
            //     items: [
            //         { label: 'Liste des signalements', icon: 'pi pi-bars', routerLink: ['/report/list'] },
            //         { label: 'Ajouter un signalement', icon: 'pi pi-plus', routerLink: ['/report/form'] },
            //     ]
            // },
            {
                label: 'Settings',
                items: [
                    { label: 'Settings', icon: 'pi pi-fw pi-home', routerLink: ['/settings'] },
                ]
            },
            {
                label: 'Déconnexion',
                items: [
                    {
                        label: 'Déconnexion',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this.authenticationService.logout();
                            this.router.navigate(['/auth/login']);
                        }
                        ,
                        routerLink: ['/logout'],
                    },
                ]
            },
            // {
            //     label: 'Authentication',
            //     items: [
            //         { label: 'Login', icon: 'pi pi-fw pi-home', routerLink: ['/auth/login'] },
            //         { label: 'Register', icon: 'pi pi-fw pi-home', routerLink: ['/auth/register'] },
            //     ],
            // },
            // {
            //     label: 'Pages',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Auth',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //                 {
            //                     label: 'Login',
            //                     icon: 'pi pi-fw pi-sign-in',
            //                     routerLink: ['/auth/login']
            //                 },
            //                 {
            //                     label: 'Error',
            //                     icon: 'pi pi-fw pi-times-circle',
            //                     routerLink: ['/auth/error']
            //                 },
            //                 {
            //                     label: 'Access Denied',
            //                     icon: 'pi pi-fw pi-lock',
            //                     routerLink: ['/auth/access']
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Crud',
            //             icon: 'pi pi-fw pi-pencil',
            //             routerLink: ['/pages/crud']
            //         },
            //         {
            //             label: 'Timeline',
            //             icon: 'pi pi-fw pi-calendar',
            //             routerLink: ['/pages/timeline']
            //         },
            //         {
            //             label: 'Not Found',
            //             icon: 'pi pi-fw pi-exclamation-circle',
            //             routerLink: ['/notfound']
            //         },
            //     ]
            // }
        ];
    }
}
