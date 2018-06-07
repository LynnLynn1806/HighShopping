import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

    homePage = HomePage;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  confirm(){
    let alert = this.alertCtrl.create({
      title: 'Message',
      subTitle: 'Message has been sent by your email. Please check your email.',
      buttons: ['OK']
    });
    alert.present();
  }
}

