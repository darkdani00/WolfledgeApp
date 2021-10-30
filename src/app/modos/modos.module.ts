import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModosPageRoutingModule } from './modos-routing.module';
import { ModosModalPageModule } from '../modales/modos-modal/modos-modal.module';

import { ModosPage } from './modos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModosPageRoutingModule,
    ReactiveFormsModule,
    ModosModalPageModule
  ],
  declarations: [ModosPage]
})
export class ModosPageModule {}
