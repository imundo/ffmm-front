import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartolaDatosClienteService } from './cartolaDatosCliente.service';
import { fuseAnimations } from '@fuse/animations';

// tslint:disable-next-line:class-name
export interface Tile {
  color: string;
  cols: number;
  text: string;
}

@Component({
  selector     : 'cartolaDatosCliente-component',
  templateUrl  : './cartolaDatosCliente.component.html',
  styleUrls    : ['./cartolaDatosCliente.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class FuseCartolaDatosClienteComponent implements OnInit
{
  tiles: Tile[] = [
    {text: 'Cliente', cols: 1, color: '#6BB06E'},
    {text: 'xxxxxxxxxx', cols: 3, color: 'white'},
    {text: 'Oficina', cols: 1, color: '#6BB06E'},
    {text: 'xxxxxxxxxx', cols: 3, color: 'white'},
    {text: 'Agente', cols: 1, color: '#6BB06E'},
    {text: 'xxxxxxxxxx', cols: 3, color: 'white'},
    {text: 'Fecha Desde', cols: 1, color: '#6BB06E'},
    {text: 'xxxxxxxxxx', cols: 3, color: 'white'},
    {text: 'Fecha Hasta', cols: 1, color: '#6BB06E'},
    {text: 'xxxxxxxxxx', cols: 3, color: 'white'},
  ];

  currentTime: any = new Date();

  constructor(protected cartolaDatosClienteService: CartolaDatosClienteService, private formBuilder: FormBuilder)
  {

  }
  ngOnInit()
  {


  }




}
