import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatCheckboxModule,MatDatepickerModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatRadioModule} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseCartolaDatosClienteComponent } from './cartolaDatosCliente.component';
import { CartolaDatosClienteService } from './cartolaDatosCliente.service';


const routes: Routes = [
    {
        path     : '**',
        component: FuseCartolaDatosClienteComponent
    }
];

@NgModule({
    declarations: [
        FuseCartolaDatosClienteComponent
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
    ],
})
export class FuseCartolaDatosClienteModule
{
}

