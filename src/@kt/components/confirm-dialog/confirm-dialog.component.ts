import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'kt-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class KtConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<KtConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<KtConfirmDialogComponent>
    )
    {
    }

}
