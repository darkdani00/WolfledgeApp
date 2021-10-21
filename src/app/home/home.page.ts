import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import {FormControl,FormGroup,FormBuilder,Validator,Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

    public citaForm: FormGroup;

    session;
    form_sent = false;

  constructor(
      private restService : RestService,
      private formBuilder: FormBuilder,
  ) {
    this.restService.authUserData().then(result=>{
        this.session = result;
        console.log(this.session);
    })


    this.citaForm = this.formBuilder.group({
      hpaciente: new FormControl("", Validators.compose([Validators.required])),
      hcurp: new FormControl("", Validators.compose([Validators.required])),
      hfecha: new FormControl("", Validators.compose([Validators.required])),
      hgenero: new FormControl("", Validators.compose([Validators.required])),
      hfrecuencia: new FormControl("", Validators.compose([Validators.required])),
      hpeso: new FormControl("", Validators.compose([Validators.required])),
      hestatura: new FormControl("", Validators.compose([Validators.required])),
      hantecedentes: new FormControl("", Validators.compose([Validators.required])),
      hpadecimiento: new FormControl("", Validators.compose([Validators.required])),
      halergias: new FormControl("", Validators.compose([Validators.required])),
      hobservaciones: new FormControl("", Validators.compose([Validators.required])),
      hdoctor: new FormControl("", Validators.compose([Validators.required]))

    } )
  }

  close_sess(){
      this.restService.logout();
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

  async guardar_historia(){
    this.form_sent = true;
    if(this.citaForm.valid){
      console.info(this.citaForm.value);
      this.restService.post_method('users/api/historia_clinica',this.citaForm.value).subscribe( result => {
        this.restService.display_toast("Información cargada correctamente","success",result,"top",400);
      })
    }
  }

 save_cita() {
    this.form_sent = true;
    if (this.citaForm.invalid) {
      return;
    } else {
        this.restService.cita(this.citaForm.value);
      }
    }
  

}