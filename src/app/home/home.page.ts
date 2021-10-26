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
    this.restService.do_get("clase/api/clase",).subscribe(data =>{
      this.clases_lista = data.data;
    });
  }



  

}