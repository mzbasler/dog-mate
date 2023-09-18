import { Component, OnInit } from '@angular/core';
import { OngService } from '../services/ong.service';
import { Ong } from '../models/estruturas';

@Component({
  selector: 'app-cadastra-ong',
  templateUrl: './cadastra-ong.page.html',
  styleUrls: ['./cadastra-ong.page.scss'],
})
export class CadastraOngPage {
  ong: Ong = new Ong();

  constructor(private ongService: OngService) {}

  adicionarAdotante() {
    this.ongService.addOng(this.ong).subscribe(
      (response: any) => {
        console.log('Adotante adicionado com sucesso', response);
      },
      (error: any) => {
        console.error('Erro ao adicionar adotante', error);
      }
    );
  }
}
