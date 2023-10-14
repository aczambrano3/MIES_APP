import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barthel } from '../models/barthel';
@Injectable({
  providedIn: 'root'
})
export class BarthelService {
  //url = '/api/TestBarthel';
  url= 'http://3.84.236.236:3000/TestBarthel';

  constructor(private http:HttpClient) { }
  
  guardarBarthel(barthel: Barthel): Observable<any> {
    return this.http.post(this.url, barthel);
  }
}
