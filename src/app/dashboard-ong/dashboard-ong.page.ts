import { Component, OnInit } from '@angular/core';
import { OngService } from '../services/ong.service';


@Component({
  selector: 'app-dashboard-ong',
  templateUrl: './dashboard-ong.page.html',
  styleUrls: ['./dashboard-ong.page.scss'],
})

export class DashboardOngPage implements OnInit {

  nome: string ="";

  constructor(private ongService: OngService) {}

  ngOnInit() {
    // Ao inicializar o componente, faça uma solicitação para buscar os dados do tutor
    this.ongService.getNomeOng().subscribe((nomeOng) => {
      this.nome = nomeOng;
    });
  }
}