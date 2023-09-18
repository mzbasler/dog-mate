import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraAdotanteRoutingModule } from './cadastra-adotante-routing.module';

import { CadastraAdotantePage } from './cadastra-adotante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraAdotanteRoutingModule,
  ],
  declarations: [CadastraAdotantePage],
})
export class CadastraAdotantePageModule {}
