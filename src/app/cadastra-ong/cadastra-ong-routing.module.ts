import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraOngPage } from './cadastra-ong.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraOngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraOngPageRoutingModule {}
