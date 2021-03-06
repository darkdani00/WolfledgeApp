import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'creacion',
    loadChildren: () => import('./public/creacion/creacion.module').then( m => m.CreacionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'especialidades',
    loadChildren: () => import('./especialidades/especialidades.module').then( m => m.EspecialidadesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'especialidad-modal',
    loadChildren: () => import('./modales/especialidad-modal/especialidad-modal.module').then( m => m.EspecialidadModalPageModule)
  },
  {
    path: 'modos',
    loadChildren: () => import('./modos/modos.module').then( m => m.ModosPageModule)
  },
  {
    path: 'modos-modal',
    loadChildren: () => import('./modales/modos-modal/modos-modal.module').then( m => m.ModosModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
