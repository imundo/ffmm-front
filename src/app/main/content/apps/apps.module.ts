import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseAngularMaterialModule } from '../components/angular-material/angular-material.module';

import { FuseSharedModule } from '@fuse/shared.module';
import { ClienteService } from './cliente/cliente/cliente.service';
import { CrearClienteService } from './cliente/crear-cliente/crear-cliente.service';
import { AporteService } from './cliente/aporte/aporte.service';
import { RescateService } from './cliente/rescate/rescate.service';
import { GenerarAporteService } from './cliente/generarAporte/generarAporte.service';
const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#FuseAnalyticsDashboardModule'
    },
    {
        path        : 'dashboards/project',
        loadChildren: './dashboards/project/project.module#FuseProjectDashboardModule'
    },
    {
        path        : 'cliente/cliente',
        loadChildren: './cliente/cliente/cliente.module#FuseClienteModule'
    },

    {
        path        : 'cliente/crear-cliente',
        loadChildren: './cliente/crear-cliente/crear-cliente.module#CrearClienteModule'
    },

    {
        path        : 'cliente/habilitar-cliente',
        loadChildren: './cliente/habilitar-cliente/habilitar-cliente.module#HabilitarClienteModule'
    },
    {
        path        : 'cliente/aporte',
        loadChildren: './cliente/aporte/aporte.module#FuseAporteModule'
    },
    {
        path        : 'cliente/generarAporte',
        loadChildren: './cliente/generarAporte/generarAporte.module#FuseGenerarAporteModule'
    },
    {
        path        : 'cliente/rescate',
        loadChildren: './cliente/rescate/rescate.module#FuseRescateModule'
    },
    {
        path        : 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
    }
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes),
        FuseAngularMaterialModule
    ],
    providers: [ClienteService,CrearClienteService,AporteService,RescateService,GenerarAporteService],
    declarations: []
})
export class FuseAppsModule
{
}
