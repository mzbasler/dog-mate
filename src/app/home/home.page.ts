import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Importando o serviço de autenticação do Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Adotante, Ong } from '../models/estruturas';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Atributos para armazenar o e-mail e a senha fornecidos pelo usuário
  adotante = {} as Adotante;
  ong = {} as Ong;
  public email: string;
  public senha: string;

  // Injetando as dependências no construtor: o roteador e o serviço de autenticação do Firebase
  constructor(
    private router: Router,
    private authService: AuthService,
    public auth: AngularFireAuth
  ) {
    // Inicializando os atributos email e senha com strings vazias
    this.email = '';
    this.senha = '';
  }

  // Método para navegar para uma rota específica
  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }

  // Método para autenticar um usuário com o Firebase usando e-mail e senha
  async autenticar(email: string, senha: string) {
    this.authService.login(email, senha).then(() => {
      this.router.navigate(['/dashboard-adotante']);
    });
  }
}
