import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModosModalPage } from './modos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModosModalPageRoutingModule {}
