import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { KT_CONFIG } from '@kt/services/config.service';

@NgModule()
export class KtModule
{
    constructor(@Optional() @SkipSelf() parentModule: KtModule)
    {
        if ( parentModule )
        {
            throw new Error('KtModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<KtModule>
    {
        return {
            ngModule : KtModule,
            providers: [
                {
                    provide : KT_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
