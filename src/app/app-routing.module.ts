import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/homepage/homepage.module').then(m => m.HomepageModule) },
                    { path: 'loan', loadChildren: () => import('./demo/modules/loan/loan.module').then(m => m.LoanModule) },
                    { path: 'refund', loadChildren: () => import('./demo/modules/refund/refund.module').then(m => m.RefundModule) },
                    { path: 'report', loadChildren: () => import('./demo/modules/report/report.module').then(m => m.ReportModule) },
                    { path: 'settings', loadChildren: () => import('./demo/components/setting/setting.module').then(m => m.SettingModule) },
                    { path: 'tdb', loadChildren: () => import('./demo/modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
