import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'fuse-analytics-dashboard',
    templateUrl  : './cliente.component.html',
    styleUrls    : ['./cliente.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseClienteComponent implements OnInit
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

    constructor(protected clienteService: ClienteService, private formBuilder: FormBuilder)
    {
      
    }
    getprofile(rutId){
        console.log("El Rut es"+this.rutId);
        this.clienteService.getCliente2(this.rutId)
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
        
        this.clienteService.getCliente2(name)
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