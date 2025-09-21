import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthenticationService } from "../demo/service/api/authentication.service";
import { Router } from "@angular/router";
import { UserRole } from "../demo/dtos/user/user-role.enum";
import { MENU_LABELS } from "../demo/components/constants/menu.constants";

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
        const userInfo = this.authenticationService.getUserInfo();

        this.model = [];

        if (UserRole.ADMIN === role) {
            this.model.push({
                label: MENU_LABELS.ADMIN,
                items: [
                    { label: MENU_LABELS.DASHBOARD, icon: 'pi pi-th-large', routerLink: ['/admin/dashboard/view'] },
                    { label: MENU_LABELS.LOAN_LIST, icon: 'pi pi-bars', routerLink: ['/admin/loan/list'] },
                    { label: MENU_LABELS.REFUND_LIST, icon: 'pi pi-refresh', routerLink: ['/admin/refund/list'] },
                    { label: MENU_LABELS.REPORT_LIST, icon: 'pi pi-ban', routerLink: ['/admin/report/list'] },
                    { label: MENU_LABELS.PENDING_USERS, icon: 'pi pi-plus', routerLink: ['/admin/pending-users'] },
                ]
            });
        }

        if (UserRole.LENDER === role || UserRole.BORROWER === role) {
            if (userInfo.status === 'VALIDATED') {

                this.model.push({
                    label: MENU_LABELS.HOME,
                    items: [
                        { label: MENU_LABELS.HOME, icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    ]
                });

                this.model.push({
                    label: MENU_LABELS.PILOTAGE,
                    items: [
                        { label: MENU_LABELS.DASHBOARD, icon: 'pi pi-th-large', routerLink: ['/dashboard'] },
                        { label: MENU_LABELS.MY_LOANS, icon: 'pi pi-bars', routerLink: ['/loan/list'] },
                        { label: MENU_LABELS.MY_REFUNDS, icon: 'pi pi-refresh', routerLink: ['/refund/list'] },
                    ]
                });

                const marketItems = [
                    { label: MENU_LABELS.FIND_LOAN, icon: 'pi pi-desktop', routerLink: ['/loan/marketplace'] }
                ];

                if (UserRole.LENDER === role) {
                    marketItems.push({ label: MENU_LABELS.OFFER_LOAN, icon: 'pi pi-plus', routerLink: ['/loan/request'] });
                }

                this.model.push({
                    label: MENU_LABELS.MARKET,
                    items: marketItems
                });

                this.model.push({
                    label: MENU_LABELS.REPORTS,
                    items: [
                        { label: MENU_LABELS.MY_REPORTS, icon: 'pi pi-bars', routerLink: ['/report/list'] },
                    ]
                });
            } else {
                this.model.push({
                    label: MENU_LABELS.PENDING_ACCOUNT,
                    items: [
                        { label: MENU_LABELS.PENDING_VALIDATION, icon: 'pi pi-clock', routerLink: ['/pending-validation'] },
                    ]
                });
            }
        }

        this.model.push({
            label: MENU_LABELS.LOGOUT,
            items: [
                {
                    label: MENU_LABELS.LOGOUT,
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
