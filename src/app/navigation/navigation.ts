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
                        'id'   : 'aporte',
                        'title': 'aporte',
                        'translate': 'APORTE CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/cliente/aporte'
                    },
                    {
                        'id'   : 'rescate',
                        'title': 'rescate',
                        'translate': 'RESCATE CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/cliente/rescate'
                    },
                    {
                        'id'   : 'cartola',
                        'title': 'cartola',
                        'translate': 'CARTOLA CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/cliente/cartola'
                    },
                    {
                        'id'   : 'project',
                        'title': 'Project',
                        'translate': 'HABILITAR CLIENTE',
                        'type' : 'item',
                        'url'  : '/apps/cliente/habilitar-cliente'
                    },
                    {
                        'id'       : 'convenio',
                        'title'    : 'convenio',
                        'translate': 'CONVENIO',
                        'type'     : 'collapse',
                        'icon'     : 'account_balance_wallet',
                        'children' : [
                            {
                                'id'   : 'convenio',
                                'title': 'convenio',
                                'translate': 'CARTOLA CLIENTE',
                                'type' : 'item',
                                'url'  : '/apps/cliente/cartola'
                            },
                            {
                                'id'   : 'convenio',
                                'title': 'convenio',
                                'translate': 'CONSULTAR CONVENIO POR RUT',
                                'type' : 'item',
                                'url'  : '/apps/cliente/convenio/consulta-convenio-por-rut'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
