import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

// import { Observable, throwError } from 'rxjs/';
import {_throw as throwError} from 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';
import { retry, catchError, map, take } from 'rxjs/operators';
import { Sexo } from './models/sexo';
import { Nacionalidad } from './models/nacionalidad';
import { Pais } from './models/pais';
import { Cliente } from './models/cliente';

@Injectable()
export class CrearClienteService implements Resolve<any>
{
    widgets: any[];

    url = 'http://localhost:8080/'; // api rest fake
    name:string = '';
    age:number;
    found:boolean;
    constructor(
        private http: HttpClient
    )
    {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getWidgets()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getWidgets(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/analytics-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets = response;
                    resolve(response);
                }, reject);
        });
    }
    getSexos(): Observable<Sexo[]> {
      return this.http.get<Sexo[]>(`${this.url}api/cliente/`+'sexo')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }
    getNacionalidades(): Observable<Nacionalidad[]> {
      return this.http.get<Nacionalidad[]>(`${this.url}api/cliente/`+'nacionalidad')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }
    getPaises(): Observable<Pais[]> {
      return this.http.get<Pais[]>(`${this.url}api/cliente/`+'pais')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }
    getProfesiones(): Observable<Pais[]> {
      return this.http.get<Pais[]>(`${this.url}api/cliente/`+'profesiones')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Error ocurrido en el lado del cliente
        errorMessage = error.error.message;
      } else {
        // Error ocurrido en el lado del servidor
        errorMessage = 'Código do error: ${error.status}, ' + 'mensaje: ${error.message}';
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
