import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./demo/service/api/auth.interceptor";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./demo/service/api/in-memory-data.service";

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        EventService,
        IconService,
        NodeService,
        PhotoService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
