import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatCheckboxModule,MatDatepickerModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';


import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatRadioModule} from '@angular/material'
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseGenerarAporteComponent } from './generarAporte.component';
import { GenerarAporteService } from './generarAporte.service';


const routes: Routes = [
    {
        path     : '**',
        component: FuseGenerarAporteComponent
    }
];

@NgModule({
    declarations: [
        FuseGenerarAporteComponent
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
        MatRadioModule
      
      
    ]
})
export class FuseGenerarAporteModule
{
}

