import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../providers/cliente.service';
import { fuseAnimations } from '@fuse/animations';
import { Sexo } from '../../models/sexo';
import { Nacionalidad } from '../../models/nacionalidad';

@Component({
    selector     : 'fuse-analytics-dashboard',
    templateUrl  : './crear-cliente.component.html',
    styleUrls    : ['./crear-cliente.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class CrearClienteComponent implements OnInit
{
    users: any[] = [];
    // sexos: any[] = [];
    sexos: Sexo[] = [];
    nacionalidades: Nacionalidad[] = [];
    form: FormGroup;
    formErrors: any;

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

    constructor(
        private formBuilder: FormBuilder,
        protected clienteService: ClienteService
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

        // Horizontal Stepper form error
        this.horizontalStepperStep1Errors = {
            firstName: {},
            lastName : {}
        };

        this.horizontalStepperStep2Errors = {
            address: {}
        };

        this.horizontalStepperStep3Errors = {
            city      : {},
            state     : {},
            postalCode: {}
        };

        // Vertical Stepper form error
        this.verticalStepperStep1Errors = {
            firstName: {},
            lastName : {}
        };

        this.verticalStepperStep2Errors = {
            address: {}
        };

        this.verticalStepperStep3Errors = {
            city      : {},
            state     : {},
            postalCode: {}
        };
    }

    ngOnInit()
    {


        this.getSexos();
        this.getNacionalidades();



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

        // Horizontal Stepper form steps
        this.horizontalStepperStep1 = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName : ['', Validators.required]
        });

        this.horizontalStepperStep2 = this.formBuilder.group({
            address: ['', Validators.required]
        });

        this.horizontalStepperStep3 = this.formBuilder.group({
            city      : ['', Validators.required],
            state     : ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]]
        });

        this.horizontalStepperStep1.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });

        this.horizontalStepperStep2.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });

        this.horizontalStepperStep3.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });

        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName : ['', Validators.required]
        });

        this.verticalStepperStep2 = this.formBuilder.group({
            address: ['', Validators.required]
        });

        this.verticalStepperStep3 = this.formBuilder.group({
            city      : ['', Validators.required],
            state     : ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]]
        });

        this.verticalStepperStep1.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });

        this.verticalStepperStep2.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });

        this.verticalStepperStep3.valueChanges.subscribe(() => {
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


    getSexos() {
        this.clienteService.getSexos().subscribe((sexos: Sexo[]) => {
          this.sexos = sexos;
        });
    }

    getNacionalidades() {
        this.clienteService.getNacionalidades().subscribe((nacionalidades: Nacionalidad[]) => {
          this.nacionalidades = nacionalidades;
        });
    }
}