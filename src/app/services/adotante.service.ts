import { Injectable } from '@angular/core';
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
  // Removido a URL, já que você vai usar o Firebase
  adotante: Adotante = new Adotante();
  private dbPath = '/adotantes'; // Atualizado para apenas '/adotantes'
  adotantesRef: AngularFireList<Adotante>;

  constructor(private db: AngularFireDatabase) {
    // HttpClient removido
    this.adotantesRef = db.list(this.dbPath);
  }

  create(adotante: Adotante): any {
    return this.adotantesRef.push(adotante);
  }

  getNomeAdotante(): Observable<any> {
    // Tipo atualizado para 'any'
    return this.adotantesRef.valueChanges(); // Usando o Firebase aqui
  }
}
