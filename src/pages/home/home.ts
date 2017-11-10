import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface results {
  title: string,
  author: string,
  title: string,
  image: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
