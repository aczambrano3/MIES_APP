import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiniMental } from '../models/MiniMental';

@Injectable({
  providedIn: 'root'
})
export class MiniMentalService {

  url = 'http://3.84.236.236:3000/MiniMental';
  constructor(private http:HttpClient) { }
  
  guardarMinimental(miniMental: MiniMental): Observable<any> {
    return this.http.post(this.url, miniMental);
  }
}

