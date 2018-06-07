import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

    homePage = HomePage;

    to = '';
    subject = '';
    body = '';

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public emailComposer: EmailComposer) {

  }

  send(){
   let alert = this.alertCtrl.create({
      title: 'Message',
      subTitle: 'Message has been sent by your email. Please check your email.',
      buttons: ['OK']
    });
    alert.present();

    /*let email = {
      to: this.to,
      cc: [],
      bcc: [],
      attachment: [],
      subject: 'Password',
      body: 'Your password is 1234',
      isHtml: false,
      app: "Gmail"
    }
    this.emailComposer.open(email);*/
  }
}

