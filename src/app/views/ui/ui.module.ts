import { NgModule } from '@angular/core';

import { UIAngularMaterialModule } from 'app/views/ui/angular-material/angular-material.module';
import { UIFormsModule } from 'app/views/ui/forms/forms.module';
import { UITypographyModule } from 'app/views/ui/typography/typography.module';

@NgModule({
    imports: [
        UIAngularMaterialModule,
        UIFormsModule,
        UITypographyModule,
    ]
})
export class UIModule
{
}
