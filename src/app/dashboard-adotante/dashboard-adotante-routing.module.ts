import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdotantePage } from '../dashboard-adotante/dashboard-adotante.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdotantePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardAdotanteRoutingModule {}