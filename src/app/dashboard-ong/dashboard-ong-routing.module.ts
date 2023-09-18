import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOngPage } from '../dashboard-ong/dashboard-ong.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardOngPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardOngRoutingModule {}