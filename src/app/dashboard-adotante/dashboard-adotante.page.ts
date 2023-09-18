import { Component, OnInit } from '@angular/core';
import { AdotanteService } from '../services/adotante.service';

@Component({
  selector: 'app-dashboard-adotante',
  templateUrl: './dashboard-adotante.page.html',
  styleUrls: ['./dashboard-adotante.page.scss'],
})

export class DashboardAdotantePage implements OnInit {

  nomeAdotante: string ="";

  constructor(private adotanteService: AdotanteService) {}

  ngOnInit() {
    // Ao inicializar o componente, faça uma solicitação para buscar os dados do tutor
    this.adotanteService.getNomeAdotante().subscribe((nomeCompleto) => {
      this.nomeAdotante = nomeCompleto;
    });
  }
}