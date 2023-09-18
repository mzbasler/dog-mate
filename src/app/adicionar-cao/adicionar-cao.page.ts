import { Component, OnInit } from '@angular/core';
import { AdicionarCaoService } from '../services/adicionar-cao.service';
import { Cao } from '../models/estruturas';

@Component({
  selector: 'app-adicionar-cao',
  templateUrl: './adicionar-cao.page.html',
  styleUrls: ['./adicionar-cao.page.scss'],
})
export class AdicionarCaoPage  implements OnInit {

  cao: Cao = new Cao();
  submited = false;

  constructor(private adicionarCaoService: AdicionarCaoService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  adicionarCao(): void {
    this.adicionarCaoService.adicionarCao(this.cao).then(() => {
      console.log('Created new item successfully!');
      this.submited = true;
    });
  }
}