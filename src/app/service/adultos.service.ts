import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adulto } from '../models/Adulto';

@Injectable({
  providedIn: 'root'
})
export class AdultosService {
  private URL = 'http://3.84.236.236:3000';

  constructor(private http: HttpClient) {
  }
  getAdultos(tec_id:any) {
    return this.http.get(`${this.URL}/adulto/`+tec_id);
  }

  getAdultosCount(tec_id:any) {
    return this.http.get(`${this.URL}/adulto/getCount/`+tec_id);
  }

  agregarAdulto(datosForm:any): Observable<any>{
    return this.http.post(`${this.URL}/adulto/`, datosForm);
  }

  getById(id:any):Observable<any>{
    return this.http.get(`${this.URL}/adulto/get/`+id);
  }

  editAdulto(id:any, datosAdulto: Adulto){
    return this.http.put(`${this.URL}/adulto/edit/`+id,datosAdulto);
  }
}
