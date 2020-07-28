import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RescateService } from './rescate.service';
import { fuseAnimations } from '@fuse/animations';

// tslint:disable-next-line:class-name
interface tipoHerramPago {
  value: string;
  name: string;
}

// tslint:disable-next-line:class-name
interface tipoRescate {
  value: string;
  viewValue: string;
}

@Component({
  selector     : 'fuse-rescate-component',
  templateUrl  : './rescate.component.html',
  styleUrls    : ['./rescate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class FuseRescateComponent implements OnInit{

  tiposHerramPago: tipoHerramPago[];
  selectedHerramPago: tipoHerramPago;
  opcion_herram_pago = 'Seleccione Opción de Medio de Pago';

  tipoMedioPago: any = [
    {
      'valueHerramPago': 'cuenta',
      'nameHerramPago': 'Cuenta Corriente o Vista',
      'label': 'Seleccione Opción para Cuenta Corriente o Vista',
      tiposHerramPago: [
        {
          'value': 'corriente',
          'name': 'Cuenta Corriente',
        },
        {
          'value': 'vista',
          'name': 'Cuenta Vista',
        },
      ]
    },
    {
      'valueHerramPago': 'caja',
      'nameHerramPago': 'Retiro por Caja',
      'label': 'Seleccione Opción Retiro por Caja',
      tiposHerramPago: [
        {
          'value': 'vale',
          'name': 'Nómina de Vale Vista',
        },
      ]
    },
  ];
  selectedMedioPago: any;

  tiposRescate: tipoRescate[] = [
    {
      value: 'parc',
      viewValue: 'Rescate Parcial en Pesos'
    },
    {
      value: 'tot',
      viewValue: 'Rescate Total (aproximado)'
    },
  ];
  selectedRescate: any;

  datepickerFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(protected rescateService: RescateService, private formBuilder: FormBuilder){
  }

  ngOnInit(){
  }

  medioPagoChangeAction(valueTipoHerramPago){
    const dropDownData = this.tipoMedioPago.find((data: any) => data.valueHerramPago === valueTipoHerramPago);
    if (dropDownData && dropDownData.tiposHerramPago) {
      this.opcion_herram_pago = dropDownData.label;
      this.tiposHerramPago = dropDownData.tiposHerramPago;
    } else {
      // this.opcion_herram_pago = 'Seleccione Opción de Medio de Pago';
      this.tiposHerramPago = [];
    }
  }


}
