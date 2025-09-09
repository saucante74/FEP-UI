import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from "./demo/service/api/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: AppLayoutComponent,
                canActivate: [authGuard],
                children: [
                    { path: '', loadChildren: () => import('./demo/components/homepage/homepage.module').then(m => m.HomepageModule) },
                    { path: 'loan', loadChildren: () => import('./demo/modules/loan/loan.module').then(m => m.LoanModule) },
                    { path: 'refund', loadChildren: () => import('./demo/modules/refund/refund.module').then(m => m.RefundModule) },
                    { path: 'report', loadChildren: () => import('./demo/modules/report/report.module').then(m => m.ReportModule) },
                    { path: 'dashboard', loadChildren: () => import('./demo/modules/dashboard/user-dashboard.module').then(m => m.UserDashboardModule) },
                    { path: 'admin', loadChildren: () => import('./demo/modules/admin/admin.module').then(m => m.AdminModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/modules/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
