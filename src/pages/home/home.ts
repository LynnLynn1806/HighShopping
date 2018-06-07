import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import {ForgotPage} from '../forgot/forgot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  forgotPage = ForgotPage;

  @ViewChild('id') id;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn(){
    if(this.id.value == "admin" && this.password.value == "admin"){
        let alert = this.alertCtrl.create({
          title: 'Success',     
          buttons: ['OK']
        });
        alert.present();
    }else{
      let alert = this.alertCtrl.create({
          title: 'Fail',  
          subTitle: 'Please Try Again',        
          buttons: ['OK']
        });
        alert.present();
    }
  }

}

