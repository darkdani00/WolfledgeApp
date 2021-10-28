import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import {FormControl,FormGroup,FormBuilder,Validator,Validators} from "@angular/forms";
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  clases_lista = [];


    session;

  constructor(
      private restService : RestService,
      private formBuilder: FormBuilder,
      private menu: MenuController,
      private modalController : ModalController,
      private zone: NgZone,

  ) {
    this.refresh();
    this.load_clases();
    this.restService.authUserData().then(result=>{
        this.session = result;
        console.log(this.session);
    })

  }

  load_clases(){
    this.restService.do_get("clase/api/clase",).subscribe(data =>{
      this.clases_lista = data.data;
    });
  }
  async clase_seleccionada(_clase){
    const modal = await this.modalController.create({
      component: RegistroPage,
      componentProps : {
        "clase_seleccionada" : _clase
      }
    });
    modal.onDidDismiss().then((data) => {

    });
    return await modal.present();
  }


  refresh() {
    this.zone.run(() => {
      console.log('Información Actualizada');
    });
  }

}