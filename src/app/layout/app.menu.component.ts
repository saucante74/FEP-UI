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
                    { label: 'Loan List', icon: 'pi pi-fw pi-home', routerLink: ['/loan/list'] },
                    { label: 'Loan New', icon: 'pi pi-fw pi-home', routerLink: ['/loan/request'] },
                    { label: 'Refund List', icon: 'pi pi-fw pi-home', routerLink: ['/refund/list'] },
                    { label: 'Report List', icon: 'pi pi-fw pi-home', routerLink: ['/report/list'] },
                    { label: 'Report Form', icon: 'pi pi-fw pi-home', routerLink: ['/report/form'] },
                    { label: 'TDB', icon: 'pi pi-fw pi-home', routerLink: ['/tdb/view'] },
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
