import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  showSplash = true; // <-- show animation

  rootPage:any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //this.splashScreen.show();
      this.splashScreen.hide(); 
      timer(2000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }
}

