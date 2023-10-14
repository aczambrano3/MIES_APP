import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lawton } from '../models/lawton';
@Injectable({
  providedIn: 'root'
})
export class LawtonService {

  url= 'http://3.84.236.236:3000/TestLawton';

  constructor(private http:HttpClient) { }
  
  guardarLawton(lawton: Lawton): Observable<any> {
    return this.http.post(this.url, lawton);
  }
}
