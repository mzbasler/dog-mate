import { Component, Input } from '@angular/core';
import { AdotanteService } from '../services/adotante.service';
import { Adotante } from '../models/estruturas';

@Component({
  selector: 'app-cadastra-adotante',
  templateUrl: './cadastra-adotante.page.html',
  styleUrls: ['./cadastra-adotante.page.scss'],
})
export class CadastraAdotantePage {
  adotante: Adotante = new Adotante();
  submited = false;

  constructor(private adotanteService: AdotanteService) {}

  adicionarAdotante(): void {
    this.adotanteService.create(this.adotante).then(() => {
      console.log('Created new item successfully!');
      this.submited = true;
    });
  }
}
