import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialidadModalPage } from './especialidad-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialidadModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadModalPageRoutingModule {}
