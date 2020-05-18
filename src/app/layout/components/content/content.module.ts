import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KtSharedModule } from '@kt/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        KtSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
