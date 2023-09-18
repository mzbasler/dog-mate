import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ong } from '../models/estruturas';

@Injectable({
  providedIn: 'root',
})
export class OngService {
  private apiUrl = 'https://seu-endereco-api-aqui.com/ong'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  addOng(ong: Ong): Observable<Ong> {
    return this.http.post<Ong>(this.apiUrl, ong);
  }
}
