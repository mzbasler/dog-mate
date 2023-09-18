import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdicionarCaoRoutingModule } from './adicionar-cao-routing.module';
import { AdicionarCaoPage } from './adicionar-cao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarCaoRoutingModule,
  ],
  declarations: [AdicionarCaoPage],
})
export class AdicionarCaoModule {}
