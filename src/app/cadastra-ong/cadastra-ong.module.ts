import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraOngPageRoutingModule } from './cadastra-ong-routing.module';

import { CadastraOngPage } from './cadastra-ong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraOngPageRoutingModule
  ],
  declarations: [CadastraOngPage]
})
export class CadastraOngPageModule {}
