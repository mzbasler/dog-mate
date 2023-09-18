import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Importando o serviço de autenticação do Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Atributos para armazenar o e-mail e a senha fornecidos pelo usuário
  public email: string;
  public senha: string;

  // Injetando as dependências no construtor: o roteador e o serviço de autenticação do Firebase
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    // Inicializando os atributos email e senha com strings vazias
    this.email = '';
    this.senha = '';
  }

  // Método para navegar para uma rota específica
  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }

  // Método para autenticar um usuário com o Firebase usando e-mail e senha
  async autenticar() {
    // Certificando-se de que email e senha são definidos antes de tentar autenticar
    if (!this.email || !this.senha) {
      console.error('E-mail ou senha estão faltando.');
      return;
    }

    try {
      // Tentando autenticar o usuário com o e-mail e a senha fornecidos
      const resultado = await this.afAuth.signInWithEmailAndPassword(
        this.email,
        this.senha
      );

      // Verificando se a autenticação foi bem-sucedida
      if (resultado.user) {
        console.log('Autenticação bem-sucedida!', resultado.user);
        // Redirecionando o usuário para uma página específica após o login bem-sucedido
        this.router.navigate(['/pagina-pos-login']); // atualize para a rota desejada após o login
      } else {
        console.log('Autenticação falhou. Sem usuário retornado.');
      }
    } catch (erro) {
      // Tratando erros que podem ocorrer durante a tentativa de autenticação
      console.error('Erro ao autenticar:', erro);
    }
  }
}
