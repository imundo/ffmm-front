export const navigation = [
    {
        'id'       : 'cliente',
        'title'    : 'cliente',
        'translate': 'ALTA DE CLIENTE',
        'type'     : 'group',
        'icon'     : 'apps',
        'children' : [
            {
                'id'       : 'dashboards',
                'title'    : 'Dashboards',
                'translate': 'CLIENTE',
                'type'     : 'collapse',
                'icon'     : 'dashboard',
                'children' : [
                    {
                        'id'   : 'analytics',
                        'title': 'Analytics',
                        'translate': 'CONSULTAR CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/ui/forms'
                    },
                    {
                        'id'   : 'project',
                        'title': 'Project',
                        'translate': 'CONSULTAR CUENTA',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            }
        ]
    }
];
