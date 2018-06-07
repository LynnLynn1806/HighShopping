import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  send(){
   let alert = this.alertCtrl.create({
      title: 'Message',
      subTitle: 'Message has been sent by your email. Please check your email.',
      buttons: ['OK']
    });
    alert.present();
  }
}