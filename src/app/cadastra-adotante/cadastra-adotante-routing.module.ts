import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraAdotantePage } from './cadastra-adotante.page'; //(?)

const routes: Routes = [
  {
    path: '',
    component: CadastraAdotantePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraAdotanteRoutingModule {}
