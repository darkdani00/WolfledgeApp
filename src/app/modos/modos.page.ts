import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ModalController } from '@ionic/angular';

import { ModosModalPage } from '../modales/modos-modal/modos-modal.page';

@Component({
  selector: 'app-modos',
  templateUrl: './modos.page.html',
  styleUrls: ['./modos.page.scss'],
})
export class ModosPage implements OnInit {

  modo_list= [];

  constructor(
    private restService : RestService,
    private modalController : ModalController,

  ) {
    this.cargar_modos();
   }

  ngOnInit() {
  }

  cargar_modos(){
    this.restService.do_get("material/api/material").subscribe(data =>{
      this.modo_list = data.data
    })
  }

  async crear_modo(){
    const modal = await this.modalController.create({
      component: ModosModalPage
    });
    modal.onDidDismiss().then((data) => {

    });
    return await modal.present();
  }

  async material_seleccionado(_material){
    const modal = await this.modalController.create({
      component: ModosModalPage,
      componentProps : {
        "material_seleccionado" : _material
      }
    });
    modal.onDidDismiss().then((data) => {

    });
    return await modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
