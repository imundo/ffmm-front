import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RescateService } from './rescate.service';
import { fuseAnimations } from '@fuse/animations';

interface tipoMedioPago {
  value: string;
  viewValue: string;
}

interface tipoHerramPago {
  value: string;
  viewValue: string;
}

interface tipoRescate {
  value: string;
  viewValue: string;
}

@Component({
  selector     : 'rescate-component',
  templateUrl  : './rescate.component.html',
  styleUrls    : ['./rescate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class FuseRescateComponent implements OnInit
{
  clientes: any[] = [];
  direcciones: any[] = [];
  form: FormGroup;
  formErrors: any;
  rutId:string;
  age:number;
  found:boolean;
  // Horizontal Stepper
  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;
  horizontalStepperStep1Errors: any;
  horizontalStepperStep2Errors: any;
  horizontalStepperStep3Errors: any;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;
  verticalStepperStep1Errors: any;
  verticalStepperStep2Errors: any;
  verticalStepperStep3Errors: any;

  datepickerFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  tipoMedioPago: tipoMedioPago[] = [
    {
      value: 'cuenta',
      viewValue: 'Cuenta Corriente o Vista'
    },
    {
      value: 'caja',
      viewValue: 'Retiro por Caja'
    },
  ];
  selectedMedioPago: string;

  /*
  tipoHerramPago: tipoHerramPago[] = [
    {
      value: 'cuenta',
      viewValue: 'Cuenta Corriente o Vista'
    },
    {
      value: 'caja',
      viewValue: 'Retiro por Caja'
    },
  ];
  selectedHerramPago: string;
   */
  tipoHerramPago: tipoHerramPago[] = [
    {
      value: 'cuenta',
      viewValue: 'Cuenta Corriente o Vista'
    },
    {
      value: 'caja',
      viewValue: 'Retiro por Caja'
    },
  ];
  selectedHerramPago: string;

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

  constructor(protected rescateService: RescateService, private formBuilder: FormBuilder)
  {

  }
  getprofile(rutId){
    console.log("El Rut es"+this.rutId);
    this.rescateService.getCliente2(this.rutId)
      .subscribe(
        (data) => { // Success
          this.clientes = data['personaNatural'];
          this.direcciones = data['direccion']
          console.log(data);
          console.log(data.length);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  ngOnInit()
  {

    this.rescateService.getCliente2(name)
      .subscribe(
        (data) => { // Success
          this.clientes = data['personaNatural'];
          this.direcciones = data['direccion']
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );



  }




}
