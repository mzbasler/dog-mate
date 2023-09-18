import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adotante } from '../models/estruturas';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class AdotanteService {
  url = 'http://localhost:3000/';
  adotante: Adotante = new Adotante();
  private dbPath = 'dog-mate-fd3f4/adotantes';
  adotantesRef: AngularFireList<Adotante>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.adotantesRef = db.list(this.dbPath);
  }

  create(adotante: Adotante): any {
    return this.adotantesRef.push(adotante);
  }

  getNomeAdotante(): Observable<string> {
    return this.http.get<string>('/adotantes');
  }
}
