import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { KtSharedModule } from '@kt/shared.module';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { MatButtonModule } from '@angular/material/button';

const routes = [
    {
        path     : 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        MatButtonModule,
        KtSharedModule
    ],
    exports     : [
        DashboardComponent
    ]
})

export class DashboardModule
{
}
