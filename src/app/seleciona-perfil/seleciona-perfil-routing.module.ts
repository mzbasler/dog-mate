import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecionaPerfilPage } from './seleciona-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionaPerfilPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionaPerfilPageRoutingModule {}
