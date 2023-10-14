import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/Tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {
  private URL = 'http://3.84.236.236:3000';

  constructor(private http: HttpClient) {
  }
  getTecnicos(sup_id:any) {
    return this.http.get(`${this.URL}/tecnico/`+sup_id);
  }

  getTecnicosCount(sup_id:any) {
    return this.http.get(`${this.URL}/tecnico/getCount/`+sup_id);
  }

  agregarTecnico(datosForm:any): Observable<any>{
    return this.http.post(`${this.URL}/adulto/`, datosForm);
  }

  getById(id:any):Observable<any>{
    return this.http.get(`${this.URL}/tecnico/get/`+id);
  }

  editTecnico(id:any, datosTecnico: Tecnico){
    return this.http.put(`${this.URL}/adulto/edit/`+id,datosTecnico);
  }
}
