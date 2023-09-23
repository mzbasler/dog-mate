import { Component, OnInit } from '@angular/core';
import { OngService } from '../services/ong.service';
import { Ong } from '../models/estruturas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-ong',
  templateUrl: './cadastra-ong.page.html',
  styleUrls: ['./cadastra-ong.page.scss'],
})
export class CadastraOngPage {
  ong: Ong = new Ong();
  submited = false;

  constructor(private router: Router, private ongService: OngService) {}

  adicionarOng(): void {
    this.ongService.create(this.ong).then(() => {
      console.log('Created new item successfully!');
      this.submited = true;

      // Suponha que 'this.ong.tipo' contém o tipo do usuário ("admin" ou "user")
      this.router.navigate(['/dashboard-ong']);
    });
  }
}
