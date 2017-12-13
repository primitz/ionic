import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Lucas Primitão"
  public array=
  [
    {
      name: 'Jenny',
      age: 18,
      status: 'Online',
      img: 'assets/imgs/je.jpg'
    },
    {
      name: 'Ale',
      age: 23,
      status: 'Offline',
      img: 'assets/imgs/primitz.png'
    },
    {
      name: 'Vitor',
      age: 24,
      status: 'Aiui',
      img: 'assets/imgs/je.jpg'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.recebeDados('teste primitz')
  }
  recebeDados(Data)  {
    console.log(Data)
  }
}
