import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from  '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {
  }

  goBack() {
    if(this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20
  
      }
      this.nativePageTransitions.slide(options);

      this.navCtrl.pop();
    }
    else{
      let options: NativeTransitionOptions = {
        duration: 800
  
      }
      this.nativePageTransitions.fade(options);
      this.navCtrl.setRoot('HomePage');
    }
  }

}
