import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
    selector     : 'fuse-analytics-dashboard',
    templateUrl  : './saldo.component.html',
    styleUrls    : ['./saldo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class SaldoComponent implements OnInit
{
    displayedColumns = ['fondo', 'saldoEnCuotas', 'saldoEnPesos'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    selection = new SelectionModel<Element>(true, []);
   
    users: any[] = [];
    form: FormGroup;
    formErrors: any;

    constructor(
        private formBuilder: FormBuilder,
    ){
        // Reactive form errors
        this.formErrors = {
            company   : {},
            firstName : {},
            lastName  : {},
            address   : {},
            address2  : {},
            city      : {},
            state     : {},
            postalCode: {},
            country   : {}
        };

    }

    ngOnInit()
    {

        // Reactive Form
        this.form = this.formBuilder.group({
            rut : ['', Validators.required],
            nombres : ['', Validators.required],
            apellidoPaterno : ['', Validators.required],
            apellidoMaterno : ['', Validators.required],
            fechaNacimiento : ['', Validators.required],
            sexo : ['', Validators.required],
            nacionalidad : ['', Validators.required],
            paisNacionalidad : ['', Validators.required],
            paisResidencia : ['', Validators.required],
            paisNacimiento : ['', Validators.required],
            estadoCivil : ['', Validators.required],
            regimenMatrimonial : ['', Validators.required],
            cargasFamiliares : ['', Validators.required],
            nivelEducacional : ['', Validators.required],
            tituloProfesion : ['', Validators.required],
            categoria : ['', Validators.required],
            direccionElectronica : ['', Validators.required],
            tipoDireccion : ['', Validators.required],
            nombreCalleNumero : ['', Validators.required],
            depto : ['', Validators.required],
            villaPoblacion : ['', Validators.required],
            ciudad : ['', Validators.required],
            comuna : ['', Validators.required],
            tipo : ['', Validators.required],
            numero : ['', Validators.required],    


            company   : [
                {
                    value   : 'Google',
                    disabled: true
                }, Validators.required
            ],
            firstName : ['', Validators.required],
            lastName  : ['', Validators.required],
            address   : ['', Validators.required],
            address2  : ['', Validators.required],
            city      : ['', Validators.required],
            state     : ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]],
            country   : ['', Validators.required]
        });

        this.form.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });
    }

    onFormValuesChanged()
    {
        for ( const field in this.formErrors )
        {
            if ( !this.formErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.formErrors[field] = {};

            // Get the control
            const control = this.form.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.formErrors[field] = control.errors;
            }
        }
    }

 

}


export interface Element {
    fondo: string;
    saldoEnCuotas: number;
    saldoEnPesos: number;
  }
  
  const ELEMENT_DATA: Element[] = [
    {fondo: 'PRINCIPAL PROGRESION DEUDA LARGO PLAZO', saldoEnCuotas: 3.4116, saldoEnPesos: 283.289},
    {fondo: 'PRINCIPAL PROGRESION DEUDA LARGO PLAZO', saldoEnCuotas: 3.4116, saldoEnPesos: 283.289},
  ];


//   Antecedentes sujetos a confirmación. Infórmese sobre la garantía estatal de los depósitos en su banco o en www.sbif.cl.
// La rentabilidad o ganancia obtenida en el pasado por este fondo, no garantiza que ella se repita en el futuro. Los valores de las cuotas de los fondos mutuos son variables. Infórmese de las características esenciales de la inversión en este fondo mutuo, las que se encuentran contenidas en su reglamento interno y contrato de suscripción de cuotas. La gestión financiera y el riesgo de este fondo mutuo no guardan relación con la de las entidades bancarias o financieras del grupo empresarial al cual pertenece, ni con la desarrollada por sus agentes colocadores.