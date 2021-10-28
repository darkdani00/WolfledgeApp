import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialidadModalPageRoutingModule } from './especialidad-modal-routing.module';

import { EspecialidadModalPage } from './especialidad-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialidadModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EspecialidadModalPage]
})
export class EspecialidadModalPageModule {}
