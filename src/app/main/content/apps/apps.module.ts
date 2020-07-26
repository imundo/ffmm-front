import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseAngularMaterialModule } from '../components/angular-material/angular-material.module';

import { FuseSharedModule } from '@fuse/shared.module';
import { ClienteService } from './cliente/cliente/cliente.service';
import { CrearClienteService } from './cliente/crear-cliente/crear-cliente.service';
import { AporteService } from './cliente/aporte/aporte.service';
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
        path        : 'cliente/convenio/consulta-convenio-por-rut',
        loadChildren: './cliente/convenio/consulta-convenio-por-rut/consulta-convenio-por-rut.module#ConsultaConvenioPorRutModule'
    },
    {
        path        : 'cliente/aporte',
        loadChildren: './cliente/aporte/aporte.module#FuseAporteModule'
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
    providers: [ClienteService,CrearClienteService,AporteService],
    declarations: []
})
export class FuseAppsModule
{
}
