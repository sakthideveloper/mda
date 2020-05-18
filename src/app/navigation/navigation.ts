import { KtNavigation } from '@kt/types';

export const navigation: KtNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/dashboard',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }, {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'group',
        icon    : 'web',
        children: [
            {
                id   : 'angular-material',
                title: 'Angular Material',
                type : 'item',
                icon : 'ballot',
                url  : '/ui/angular-material'
            },
           
            {
                id   : 'forms',
                title: 'Forms',
                type : 'item',
                icon : 'web_asset',
                url  : '/ui/forms'
            },
           
            {
                id   : 'typography',
                title: 'Typography',
                type : 'item',
                icon : 'text_fields',
                url  : '/ui/typography'
            },
           
        ]
    },
];
