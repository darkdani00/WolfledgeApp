import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RestService } from './services/rest.service';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private restService : RestService,
    private navCtrl : NavController,
    private menu : MenuController,
  ) {
    this.platform.ready().then(() => {
      this.restService.authState.subscribe(state => {
        if(state){
          this.navCtrl.navigateRoot(['home']);
        }else{
          this.navCtrl.navigateRoot(['']);
        }
      });
    });
  }
  

  close_sess(){
    this.restService.logout();
}

openEnd() {  
  this.menu.close();
  }
}
