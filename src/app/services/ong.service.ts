import { Injectable } from '@angular/core';
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
  // Removido a URL, já que você vai usar o Firebase
  ong: Ong = new Ong();
  private dbPath = '/ongs'; // Atualizado para apenas '/ongs'
  ongsRef: AngularFireList<Ong>;

  constructor(private db: AngularFireDatabase) {
    // HttpClient removido
    this.ongsRef = db.list(this.dbPath);
  }

  create(ong: Ong): any {
    return this.ongsRef.push(ong);
  }

  getNomeOng(): Observable<any> {
    // Tipo atualizado para 'any'
    return this.ongsRef.valueChanges(); // Usando o Firebase aqui
  }
}
