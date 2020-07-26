import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartolaService } from './cartola.service';
import { fuseAnimations } from '@fuse/animations';

interface tipoFondo {
  value: string;
  viewValue: string;
}

@Component({
  selector     : 'cartola-component',
  templateUrl  : './cartola.component.html',
  styleUrls    : ['./cartola.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class FuseCartolaComponent implements OnInit
{
  tiposFondos: tipoFondo[] = [
    {
      value: 'opc1',
      viewValue: 'Opción 1'
    },
    {
      value: 'opc2',
      viewValue: 'Opción 2'
    },
    {
      value: 'opc3',
      viewValue: 'Opción 3'
    },
    {
      value: 'opc4',
      viewValue: 'Opción 4'
    },
    {
      value: 'opc5',
      viewValue: 'Opción 5'
    },
  ];
  selectedFondo: string;

  datepickerFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(protected cartolaService: CartolaService, private formBuilder: FormBuilder)
  {

  }
  ngOnInit()
  {


  }




}
