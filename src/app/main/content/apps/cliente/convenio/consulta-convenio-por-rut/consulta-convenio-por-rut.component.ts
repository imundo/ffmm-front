import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
    selector     : 'fuse-analytics-dashboard',
    templateUrl  : './consulta-convenio-por-rut.component.html',
    styleUrls    : ['./consulta-convenio-por-rut.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ConsultaConvenioPorRutComponent implements OnInit
{
    displayedColumns = ['select', 'nConvenio', 'medioCobro', 'ctaOrigen', 'fmDestino', 'monto', 'diaCargo', 'fIngreso', 'fAnulacion', 'estado', 'agente', 'sucursal'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    selection = new SelectionModel<Element>(true, []);
  
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }

    //////////////////////////////
 
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

    finishHorizontalStepper()
    {
        alert('You have finished the horizontal stepper!');
    }

    finishVerticalStepper()
    {
        alert('You have finished the vertical stepper!');
    }

}


export interface Element {
    nConvenio: number;
    medioCobro: string;
    ctaOrigen: string;
    fmDestino: string;
    monto: string;
    diaCargo: string;
    fIngreso: string;
    fAnulacion: string;
    estado: string;
    agente: string;
    sucursal: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {nConvenio: 1, medioCobro: 'medioCobro1', ctaOrigen: 'ctaOrigen1', fmDestino: 'fmDestino1', monto: 'monto1', diaCargo: 'diaCargo1', fIngreso: 'fIngreso1', fAnulacion: 'fAnulacion1', estado: 'estado1', agente: 'agente1', sucursal: 'sucursal1'},
    {nConvenio: 2, medioCobro: 'medioCobro2', ctaOrigen: 'ctaOrigen2', fmDestino: 'fmDestino2', monto: 'monto2', diaCargo: 'diaCargo2', fIngreso: 'fIngreso2', fAnulacion: 'fAnulacion2', estado: 'estado2', agente: 'agente2', sucursal: 'sucursal2'},
  ];