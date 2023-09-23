import { Component, Input } from '@angular/core';
import { AdotanteService } from '../services/adotante.service';
import { Adotante } from '../models/estruturas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-adotante',
  templateUrl: './cadastra-adotante.page.html',
  styleUrls: ['./cadastra-adotante.page.scss'],
})
export class CadastraAdotantePage {
  adotante: Adotante = new Adotante();
  submited = false;

  constructor(
    private router: Router,
    private adotanteService: AdotanteService
  ) {}

  adicionarAdotante(): void {
    this.adotanteService.create(this.adotante).then(() => {
      console.log('Created new item successfully!');
      this.submited = true;

      // Suponha que 'this.adotante.tipo' contém o tipo do usuário ("admin" ou "user")
      this.router.navigate(['/dashboard-adotante']);
    });
  }
}
