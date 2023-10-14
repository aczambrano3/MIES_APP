import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import {Formulario} from '../models/formulario';
import { FormularioUbi } from '../models/form';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://3.84.236.236:4000/formulario';

  constructor(private http: HttpClient) { }

  AgregarUbicacio(formularioUbi: FormularioUbi):  Observable<any>{
    console.log(formularioUbi);
    return this.http.post(this.apiUrl + '/ubicacion', formularioUbi);
  }

  getUbi(): Observable<any> {
    return this.http.get(this.apiUrl + '/obtener-id');
  }

  addFormulario(id: string ,formulario: Formulario, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('pregunta1', formulario.pregunta1);
    formData.append('pregunta2', formulario.pregunta2); 

    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('PUT', this.apiUrl + '/' + id, formData, options);
    return this.http.request(req);
  }

}
