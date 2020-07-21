import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatCheckboxModule,MatDatepickerModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';


import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { HabilitarClienteComponent } from './habilitar-cliente.component';
// import { ClienteService } from './crear-cliente.service';


const routes: Routes = [
    {
        path     : '**',
        component: HabilitarClienteComponent
    }
];

@NgModule({
    declarations: [
        HabilitarClienteComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        FuseSharedModule,
        MatCheckboxModule
      
      
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class HabilitarClienteModule
{
}

