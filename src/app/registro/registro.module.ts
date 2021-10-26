import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroPage } from './registro.page';

import { RegistroPageRoutingModule } from './registro-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
