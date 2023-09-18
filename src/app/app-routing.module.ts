import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'seleciona-perfil',
    loadChildren: () => import('./seleciona-perfil/seleciona-perfil.module').then( m => m.SelecionaPerfilPageModule)
  },
  {
    path: 'cadastra-ong',
    loadChildren: () => import('./cadastra-ong/cadastra-ong.module').then( m => m.CadastraOngPageModule)
  },
  {
    path: 'cadastra-adotante',
    loadChildren: () => import('./cadastra-adotante/cadastra-adotante.module').then( m => m.CadastraAdotantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
