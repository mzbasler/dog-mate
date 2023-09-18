import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DashboardAdotanteRoutingModule } from './dashboard-adotante-routing.module';
import { DashboardAdotantePage } from './dashboard-adotante.page';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule, 
    DashboardAdotanteRoutingModule,
    RouterModule.forChild([{ path: '', component: DashboardAdotantePage}]),
  ],
  declarations: [DashboardAdotantePage],
})
export class DashboardAdotanteModule {}
