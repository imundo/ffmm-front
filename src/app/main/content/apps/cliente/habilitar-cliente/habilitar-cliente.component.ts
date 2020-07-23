import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../providers/cliente.service';
import { fuseAnimations } from '@fuse/animations';
import { Sexo } from '../../models/sexo';
import { Nacionalidad } from '../../models/nacionalidad';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
    selector     : 'fuse-analytics-dashboard',
    templateUrl  : './habilitar-cliente.component.html',
    styleUrls    : ['./habilitar-cliente.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class HabilitarClienteComponent implements OnInit
{
    arr = [
        'CAMILA ALEJANDRA GONZALEZ GONZALEZ',
        '18.244.723-4',
        '....................................................',
        '.....................'
      ];
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


       // this.getSexos();
       // this.getNacionalidades();



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


    imprimirMandato(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    let document = {
        content: [
          {
            stack: [
              {
                text: 'Santiago, 23 de Julio del 2020',
                style: 'date'
              },
              {
                text: 'MANDATO PARA INVERTIR EN FONDOS MUTUOS',
               style: 'title1'
              }
            ]
          },
          {
            stack: [
              {
                text: [
                    { text: 'POR ESTE INSTRUMENTO, DON/DOÑA'}, 
                    { text: this.arr[0], bold: true },
                    { text: ' RUT N° '},
                    { text: this.arr[1], bold: true},
                    { text: ' EN REPRESENTACIÓN DE '},
                    { text: this.arr[2], bold: true },
                    { text: ', RUT N° '},
                    { text: this.arr[3], bold: true },
                    { text: ' EN ADELANTE '}, 
                    { text: 'EL "INVERSIONISTA" O "CLIENTE"',bold: true},
                    { text: ', EXPRESA QUE ES SU INTENCIÓN REALIZAR '},
                    { text: 'INVERSIONES EN FONDOS MUTUOS EN ADELANTE'}, 
                    { text: ' FFMM ', bold:true}, 
                    { text: 'ADMINISTRADOS POR LAS ADMINISTRADORAS GENERALES DE FONDOS, EN ADELANTE LAS '}, 
                    { text: '"ADMINISTRADORAS"', bold:true},
                    { text: ', DE LAS QUE '}, 
                    { text: 'BANCO FALABELLA', bold:true},
                    { text: ', EN ADELANTE EL '}, 
                    { text: 'BANCO', bold:true},
                    { text: ', ES AGENTE COLOCADOR.'}     
                ]
              },
            ],
            margin: [0, 5, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: 'EL CLIENTE A FIN DE REALIZAR LAS INVERSIONES EN FONDOS MUTUOS GESTIONADOS POR'},
                    { text: 'CUALQUIERA DE LAS ADMINISTRADORAS SEÑALADAS PRECEDENTEMENTE, VIENE EN OTORGAR'},
                    { text: 'UN PODER ESPECIAL, PERO TAN AMPLIO COMO EN DERECHO SE REQUIERA AL BANCO'},
                    { text: 'FALABELLA, PARA QUE ÉSTE, EN SU NOMBRE Y REPRESENTACIÓN REALICE INVERSIONES'},
                    { text: 'TENDIENTES A LA ADQUISICIÓN DE CUOTAS EN LOS FONDOS MUTUOS REFERIDOS. AL'},
                    { text: 'EFECTO, Y SIN QUE LA ENUMERACIÓN SEA TAXATIVA, EL CLIENTE CONSCIENTE EN OTORGAR A BANCO FALABELLA LAS'},
                    { text: 'FACULTADES QUE A CONTINUACIÓN SE SEÑALAN. '},   
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
			        { text: '1.- CON LOS DINEROS, DOCUMENTOS O APORTES QUE EL INVERSIONISTA PONGA A DISPOSICIÓN DEL BANCO, PODRÁ; REALIZAR INVERSIONES EN FONDOS MUTUOS EN CUALQUIERA DE LAS ADMINISTRADORAS Y EN CUALQUIERA DE LOS FONDOS ACORDADOS CON ÉSTAS, PUDIENDO AL EFECTO LA INSTITUCIÓN BANCARIA SUSCRIBIR TODOS LOS DOCUMENTOS QUE AL RESPECTO SE REQUIERAN, TALES COMO SOLICITUDES DE INVERSIÓN, CERTIFICADOS DE INVERSIÓN, CONTRATOS DE SUSCRIPCIÓN DE CUOTAS Y SUS ANEXOS, ASÍ COMO RECIBIR COMPROBANTES DE PAGO Y/O DE INVERSIÓN Y DEMÁS DOCUMENTOS QUE LAS ADMINISTRADORAS SOLICITEN U OTORGUEN. SE FACULTA ADEMÁS AL BANCO FALABELLA, PARA QUE AL REALIZAR LA INVERSIÓN SOLICITADA POR EL CLIENTE, YA SEA PERSONALMENTE O POR VÍAS REMOTAS O AUTOMATIZADAS, PROCEDA A CARGAR FONDOS DE SU(S) CUENTA(S) CORRIENTE(S), CUENTA(S) VISTA(S); CARGAR EN LA(S) TARJETA(S) DE CRÉDITO DE LA QUE EL CLIENTE ES TITULAR O ADICIONAL. TAMBIÉN EL BANCO FALABELLA ESTARÁ FACULTADO PARA, EN AQUELLOS CASOS QUE ASÍ EL INVERSIONISTA LO SOLICITE POR CUALQUIER MEDIO, OBTENER LAS SUMAS PARA INVERTIR EN FONDOS MUTUOS, DE OTROS CAPITALES QUE TENGAN DEPOSITADOS A CUALQUIER TITULO Y QUE SE ENCUENTREN A SU NOMBRE EN EL BANCO. PARA DAR CUMPLIMIENTO A CUALQUIERA DE LAS ATRIBUCIONES DE QUE ESTÁ PROVISTO EL BANCO FALABELLA, LA INSTITUCIÓN BANCARIA QUEDA PLENAMENTE FACULTADA PARA PERFECCIONAR LOS PAGOS A LAS ADMINISTRADORAS A FIN DE DAR SOLUCIÓN A LAS INVERSIONES EN FONDOS MUTUOS REALIZADAS.  AL EFECTO, EL BANCO FALABELLA QUEDA EXPRESAMENTE FACULTADO PARA AUTO CONTRATAR. LA INVERSIÓN SE ENTENDERÁ; EFECTUADA A NOMBRE DEL CLIENTE, EN LA FECHA EN QUE LA ADMINISTRADORA RECIBA EFECTIVAMENTE LOS FONDOS, SI ESTO OCURRIERA ANTES DEL CIERRE DE OPERACIÓN DEL FONDO O AL DÍA SIGUIENTE HÁBIL AL DE LA RECEPCIÓN SI ÉSTA OCURRIERE CON POSTERIORIDAD A DICHO CIERRE, Y PROCEDA A INSCRIBIR SU PARTICIPACIÓN EN EL RESPECTIVO REGISTRO DE PARTÍCIPES DEL FONDO MUTUO DE QUE SE TRATE.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: 'CONJUNTAMENTE A LO ANTERIOR, EL INVERSIONISTA AUTORIZA QUE TODA COMUNICACIÓN, INFORMACIÓN, ANTECEDENTES Y DEMÁS DOCUMENTOS QUE LAS ADMINISTRADORAS REMITAN O DEBAN ENVIAR AL CLIENTE, SEA DESPACHADA AL DOMICILIO DEL BANCO FALABELLA, QUIEN TENDRÁ LA RESPONSABILIDAD DE PONERLA EN CONOCIMIENTO DE ÉSTE.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: '2.- DE CONFORMIDAD A LO EXPUESTO, EL BANCO FALABELLA PODRÁ EN NOMBRE Y EN REPRESENTACIÓN DEL INVERSIONISTA REALIZAR TAMBIÉN LOS RESCATES DE LAS INVERSIONES QUE EL MANDATARIO INSTRUYA POR CUALQUIER MEDIO Y RESPECTO A LAS INVERSIONES QUE TENGA EN CUALQUIER FONDO MUTUO. AL EFECTO, PODRÁ SUSCRIBIR SOLICITUDES DE RESCATE, COBRAR Y PERCIBIR Y DEPOSITAR LOS VALORES CORRESPONDIENTES EN LA (S) CUENTA (S) CORRIENTE (S), CUENTA (S) VISTA (S) QUE MANTENGA EN EL BANCO FALABELLA U OTRAS INSTITUCIONES QUE EL CLIENTE HAYA INFORMADO PREVIAMENTE; TOMAR A SU NOMBRE DEPÓSITOS A PLAZO EN EL BANCO SI ASÍ SE LE INSTRUYE EMITIR VALE VISTA A NOMBRE DEL CLIENTE O BIEN REALIZAR OTRAS OPERACIONES FINANCIERAS QUE SE CONVENGAN CON EL BANCO.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: 'CON TODO, EL BANCO FALABELLA PODRÁ EN NOMBRE Y REPRESENTACIÓN DEL INVERSIONISTA O SU BENEFICIARIO, PRESENTAR SOLICITUDES DE RESCATES TOTALES O PARCIALES DE SUS INVERSIONES EN FONDOS MUTUOS, A FIN DE QUE CON EL PRODUCTO DE DICHOS RESCATES REALICE INVERSIONES EN OTROS FONDOS MUTUOS, SI ELLO FUERE DE CONVENIENCIA PARA EL CLIENTE.'},	  
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: '3.- EL INVERSIONISTA ASUME DESDE YA LA OBLIGACIÓN DE PROVEER LOS FONDOS AL BANCO FALABELLA EN LOS TÉRMINOS EXPUESTOS, PARA EFECTUAR LAS OPERACIONES QUE ÉSTE INSTRUYA. EN CASO CONTRARIO, EL BANCO COMO MANDATARIO QUEDA LIBERADO DE TODA OBLIGACIÓN DE REALIZAR CUALQUIER INVERSIÓN REQUERIDA, NO ASUMIENDO EL BANCO RESPONSABILIDAD ALGUNA EN EL CUMPLIMIENTO EN EL PRESENTE MANDATO.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: '4.- EL INVERSIONISTA DECLARA CONOCER LAS SOLICITUDES DE INVERSIÓN, SU CONTENIDO Y EL TEXTO DE LOS CONTRATOS DE SUSCRIPCIÓN DE CUOTAS DE FONDOS MUTUOS, TABLAS DE COSTOS Y DEMÁS ANTECEDENTES ATINGENTES. ASIMISMO, EXPRESA CONOCER LOS RESPECTIVOS REGLAMENTOS INTERNOS DE LOS FONDOS MUTUOS DE LAS ADMINISTRADORAS, ASÍ COMO SUS PORCENTAJES DE REMUNERACIONES, COMISIONES Y GASTOS.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },
    
          {
            stack: [
              {
                text: [
                    { text: '5.- EXPRESA EL CLIENTE TAMBIÉN, CONOCER QUE POR LA NATURALEZA DE LOS FONDOS MUTUOS, ESTOS NO PUEDEN GARANTIZAR UNA DETERMINADA RENTABILIDAD, SIENDO ÉSTA ESENCIALMENTE VARIABLE E INDETERMINADA. TAMBIÉN DECLARA CONOCER QUE EL VALOR DE LAS CUOTAS DE LOS FONDOS MUTUOS, PUEDEN AUMENTAR O DISMINUIR COMO CONSECUENCIA DE FLUCTUACIONES PROPIAS DEL MERCADO. DECLARA ASIMISMO CONOCER QUE LAS OPERACIONES SE REALIZARÁN CON LAS ADMINISTRADORAS Y QUE NO SON DEPÓSITOS NI OBLIGACIONES DEL BANCO FALABELLA Y NO COMPROMETEN PATRIMONIALMENTE A ESTA ÚLTIMA INSTITUCIÓN BANCARIA.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: 'FINALMENTE, DECLARA ESTAR AL TANTO QUE LA GESTIÓN FINANCIERA Y RIESGO DE LOS FONDOS MUTUOS QUE ADMINISTREN LAS ADMINISTRADORAS NO GUARDAN NINGUNA RELACIÓN CON LA GESTIÓN FINANCIERA DESARROLLADA POR EL BANCO FALABELLA, QUIEN SOLO ACTÚA COMO UN AGENTE INTERMEDIARIO Y QUE LOS FONDOS MUTUOS ESTÁN SUJETOS AL RIESGO DE INVERSIÓN, INCLUYENDO POSIBLES PÉRDIDAS DE CAPITAL.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: '6.- EL CLIENTE AUTORIZA AL BANCO PARA MANTENER EN CUSTODIA LOS DOCUMENTOS QUE ACREDITAN LAS INVERSIONES, COMPROBANTES DE ELLAS, SUS RESCATES, SUS PAGOS Y TODOS LOS ANTECEDENTES QUE SE HUBIEREN ORIGINADO DIRECTAMENTE CON MOTIVO DE LAS INVERSIONES QUE EL BANCO FALABELLA HAYA REALIZADO EN SU REPRESENTACIÓN. EL CLIENTE PODRÁ; SOLICITAR DICHA INFORMACIÓN SI LO ESTIMA NECESARIO.'},				  
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },
        
          {
            stack: [
              {
                text: [
                    { text: '7.- SE PRESUMIRÁ QUE EL BANCO AL REALIZAR OPERACIONES EN VIRTUD DEL PRESENTE MANDATO ACTÚA POR CUENTA DEL CLIENTE, LO QUE NO SERÁ; NECESARIO ACREDITAR ANTE LAS ADMINISTRADORAS. DESDE LUEGO EL BANCO, REPRESENTADO DE LA MANERA INDICADA, ACEPTA ESTE MANDATO EN LOS TÉRMINOS EXPUESTOS, ENTENDIÉNDOSE QUE SERÁ; SUFICIENTE RENDICIÓN DE CUENTAS, PARA TODOS LOS EFECTOS LEGALES, LA ENTREGA, POR PARTE DEL BANCO, DE COMPROBANTES Y DOCUMENTOS GENERADOS EN LA RESPECTIVA OPERACIÓN ESTE MANDATO TIENE PARA TODOS LOS EFECTOS CARÁCTER DE GRATUITO.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: '8.- EL PRESENTE INSTRUMENTO SE ENTENDERÁ VIGENTE MIENTRAS NO SE COMUNIQUE SU REVOCACIÓN, EN TODO O EN PARTE, MEDIANTE CARTA CERTIFICADA REMITIDA POR NOTARIO PÚBLICO AL BANCO FALABELLA CON UNA ANTICIPACIÓN DE 90 DÍAS A LA FECHA EN QUE DEBERÁ PRODUCIRSE EL TÉRMINO. POR SU PARTE EL BANCO FALABELLA PODRÁ; RENUNCIAR AL PRESENTE MANDATO, NOTIFICANDO AL CLIENTE MEDIANTE CARTA CERTIFICADA REMITIDA A LA DIRECCIÓN DE ÉSTE REGISTRADA EN EL BANCO, CON UNA ANTELACIÓN DE 90 DÍAS A LA FECHA TÉRMINO.'},
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10
          },

          {
            stack: [
              {
                text: [
                    { text: 'FECHA:'}
                    // <u></u><font style="text-transform: uppercase;"><c:out value="${dia}"/>&nbsp;de <c:out value="${mes}"/>&nbsp;de 20<c:out value="${anno}"/></font>
                  // <td width="45%" align="center" class="firmand">Firma Inversionista </td>
                  // <td width="45%" align="center" class="firmand">Nombre:&nbsp;<u>&nbsp;<c:out value="${sessionScope.client.nombres} ${sessionScope.client.apellidoPaterno} ${sessionScope.client.apellidoMaterno}" />&nbsp;</u></td>
                  // <td width="45%" align="center" class="firmand">Rut:&nbsp;<u>&nbsp;<fmt:formatNumber value='${sessionScope.rut}' pattern='###,###,###,##0'/>-<c:out value="${sessionScope.dv}" />&nbsp;</u></td>
                  // <td width="45%" align="center" class="firmand">Firma Representante (1)</td>
                  // <td width="45%" align="center" class="firmand">Firma Representante (2)</td>      
                ]
              },
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
            fontSize: 10,
            fontFamily:'Verdana'
          }

        //   {
            // image: 'data:image/png;base64, imagen codificada'
            // image: 'data:image/jpeg;base64,${ assets/images/logos/Falabella_Icono.svg }'
        //   }

        ],
        styles: {
          date: {
            fontSize: 10
          },
          title1: {
            fontSize: 11,
            bold: true,
            alignment: 'center',
            fontFamily:'Verdana',
            margin: [0, 50, 0, 5]
          }
        }
    };
  
    pdfMake.createPdf(document).open();

    }

}
