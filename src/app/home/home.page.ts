import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import {FormControl,FormGroup,FormBuilder,Validator,Validators} from "@angular/forms";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  clases_lista = [];


    session;
    form_sent = false;

  constructor(
      private restService : RestService,
      private formBuilder: FormBuilder,
      private menu: MenuController,
  ) {
    this.load_clases();
    this.restService.authUserData().then(result=>{
        this.session = result;
        console.log(this.session);
    })

  }

  load_clases(){
    this.restService.get_method("clases/api/clases",).subscribe(data =>{
      this.clases_lista = data.data;
    });
  }

/*
  async guardar_cita(){
    this.form_sent = true;
    if(this.citaForm.valid){
      console.info(this.citaForm.value);
      this.restService.post_method('users/api/citas',this.citaForm.value).subscribe( result => {
        this.restService.display_toast("Información cargada correctamente","success",result,"top",400);
      })
    }
  }
*/

  

}