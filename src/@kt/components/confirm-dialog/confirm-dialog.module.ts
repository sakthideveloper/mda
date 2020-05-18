import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { KtConfirmDialogComponent } from '@kt/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        KtConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        KtConfirmDialogComponent
    ],
})
export class KtConfirmDialogModule
{
}
