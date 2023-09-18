import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ong } from '../models/estruturas';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})

export class OngService {
  url = 'http://localhost:3000/';
  adotante: Ong = new Ong();
  private dbPath = 'dog-mate-fd3f4/ongs';
  ongsRef: AngularFireList<Ong>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.ongsRef = db.list(this.dbPath);
  }

  addOng(ong: Ong): any {
    return this.ongsRef.push(ong);
  }

  getNomeOng(): Observable<string> {
    return this.http.get<string>('/ongs');
  }
}
