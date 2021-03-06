import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material';

import { MatCheckboxModule,MatDatepickerModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';


import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { ConsultaConvenioPorRutComponent } from './consulta-convenio-por-rut.component';

const routes: Routes = [
    {
        path     : '**',
        component: ConsultaConvenioPorRutComponent
    }
];

@NgModule({
    declarations: [
        ConsultaConvenioPorRutComponent
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
        MatCheckboxModule,
        MatTableModule
      
      
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class ConsultaConvenioPorRutModule
{
}

