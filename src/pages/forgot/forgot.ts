import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

    homePage = HomePage;


  constructor(public navCtrl: NavController) {

  }
}

