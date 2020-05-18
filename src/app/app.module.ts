import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { KtModule } from '@kt/kt.module';
import { KtSharedModule } from '@kt/shared.module';
import { KtProgressBarModule } from '@kt/components';

import { ktConfig } from 'app/kt-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { LoginModule } from './views/authentication/login/login.module';
import { ForgotPasswordModule } from './views/authentication/forgot-password/forgot-password.module';
import { rootRouterConfig } from './app.routing';
import { Error404Module } from './views/errors/404/error-404.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(rootRouterConfig),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        KtModule.forRoot(ktConfig),
        KtProgressBarModule,
        KtSharedModule,
        SharedModule,

        // App modules
        LayoutModule,
        DashboardModule,
        LoginModule,
        ForgotPasswordModule,
        Error404Module
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
