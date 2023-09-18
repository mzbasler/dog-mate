import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarCaoPage } from './adicionar-cao.page'; //(?)

const routes: Routes = [
  {
    path: '',
    component: AdicionarCaoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarCaoRoutingModule {}
