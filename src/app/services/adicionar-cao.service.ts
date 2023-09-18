import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cao } from '../models/estruturas';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class AdicionarCaoService {

  url = 'http://localhost:3000/';
  cao: Cao = new Cao();
  private dbPath = 'dog-mate-fd3f4/caes';
  caesRef: AngularFireList<Cao>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.caesRef = db.list(this.dbPath);
  }

  adicionarCao(cao: Cao): any {
    return this.caesRef.push(cao);
  }

  getNomeAdotante(): Observable<string> {
    return this.http.get<string>('/caes');
  }
}
