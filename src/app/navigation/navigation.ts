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
                        'id'   : 'cliente',
                        'title': 'cliente',
                        'translate': 'CONSULTAR CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/cliente/cliente'
                    },
                    {
                        'id'   : 'crerCliente',
                        'title': 'crearCliente',
                        'translate': 'CREAR CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/cliente/crear-cliente'
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
