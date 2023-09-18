import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelecionaPerfilPageRoutingModule } from './seleciona-perfil-routing.module';

import { SelecionaPerfilPage } from './seleciona-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionaPerfilPageRoutingModule,
  ],
  declarations: [SelecionaPerfilPage],
})
export class SelecionaPerfilPageModule {}
