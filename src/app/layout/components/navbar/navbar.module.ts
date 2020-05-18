import { NgModule } from '@angular/core';

import { KtSharedModule } from '@kt/shared.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';
import { NavbarVerticalStyle1Module } from 'app/layout/components/navbar/vertical/style/style.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        KtSharedModule,

        NavbarVerticalStyle1Module,
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
