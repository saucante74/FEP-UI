import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./demo/service/api/auth.interceptor";
import { ReportReasonLabelPipe } from "./demo/pipe/report-reason-label.pipe";

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        ReportReasonLabelPipe
    ],
    exports: [
      ReportReasonLabelPipe
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
