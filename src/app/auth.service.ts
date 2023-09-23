import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Adotante, Ong } from './models/estruturas';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  adotante = {} as Adotante;
  ong = {} as Ong;
  email: string = '';
  senha: string = '';

  constructor(public auth: AngularFireAuth) {}

  async login(email: string, senha: string) {
    await this.auth.signInWithEmailAndPassword(email, senha);
  }
}
