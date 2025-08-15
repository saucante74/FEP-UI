import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Homepage', icon: 'pi pi-fw pi-home', routerLink: ['/homepage'] },
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                ]
            },
            {
                label: 'TABLEAU DE BORD',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-th-large', routerLink: ['/tdb/view'] },
                ]
            },
            {
                label: 'PRETS',
                items: [
                    { label: 'Liste des prêts', icon: 'pi pi-bars', routerLink: ['/loan/list'] },
                    { label: 'Ajouter un prêt', icon: 'pi pi-plus', routerLink: ['/loan/request'] },
                ]
            },
            {
                label: 'Remboursements',
                items: [
                    { label: 'Liste des remboursements', icon: 'pi pi-bars', routerLink: ['/refund/list'] },
                    { label: 'Ajouter un remboursement', icon: 'pi pi-plus', routerLink: ['/refund/request'] },
                ]
            },
            {
                label: 'Signalements',
                items: [
                    { label: 'Liste des signalements', icon: 'pi pi-bars', routerLink: ['/report/list'] },
                    { label: 'Ajouter un signalement', icon: 'pi pi-plus', routerLink: ['/report/form'] },
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Settings', icon: 'pi pi-fw pi-home', routerLink: ['/settings'] },
                ]
            },
            {
                label: 'Authentication',
                items: [
                    { label: 'Login', icon: 'pi pi-fw pi-home', routerLink: ['/auth/login'] },
                    { label: 'Register', icon: 'pi pi-fw pi-home', routerLink: ['/auth/register'] },
                ],
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                ]
            }
        ];
    }
}
