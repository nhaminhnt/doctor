import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the BookAnPointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-an-pointment',
  templateUrl: 'book-an-pointment.html',
})
export class BookAnPointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAnPointmentPage');
  }
  goConfirm() {
    const toast = this.toastCtrl.create({
      message: 'User book successfully',
      duration: 2000,
      
    });
    toast.present();
  }
}
