import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DashboardOngRoutingModule } from './dashboard-ong-routing.module';
import { DashboardOngPage } from './dashboard-ong.page';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule, 
    DashboardOngRoutingModule,
    RouterModule.forChild([{ path: '', component: DashboardOngPage}]),
  ],
  declarations: [DashboardOngPage],
})
export class DashboardOngModule {}
