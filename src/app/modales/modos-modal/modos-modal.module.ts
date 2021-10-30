import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModosModalPageRoutingModule } from './modos-modal-routing.module';

import { ModosModalPage } from './modos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModosModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModosModalPage]
})
export class ModosModalPageModule {}
