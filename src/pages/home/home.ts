import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface result {
  title: string,
  author: string,
  date: string,
  image: string
}

const resultsArray = [
  { title: 'Lorem Ipsum', author: 'Lorem', date: '16 Octobre 25', image: 'https://placeimg.com/256/256/nature' },
  { title: 'Dolor sit amet', author: 'Ipsum', date: '14 Juin -32', image: 'https://placeimg.com/256/256/nature' },
  { title: 'Consectetur adipiscing', author: 'Lorem', date: '8 Janvier -93', image: 'https://placeimg.com/256/256/nature' },
  { title: 'Aliquam vel neque odio', author: 'Ipsum', date: '3 Mars 12', image: 'https://placeimg.com/256/256/nature' },
  { title: 'Ipsum Lorem', author: 'Lorem', date: '16 Octobre 25', image: 'https://placeimg.com/256/256/nature' },
  { title: 'Sit dolor amet', author: 'Ipsum', date: '14 Juin -32', image: 'https://placeimg.com/256/256/nature' },
  { title: 'Consectetur adipiscing', author: 'Lorem', date: '8 Janvier -93', image: 'https://placeimg.com/256/256/nature' }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: result[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = resultsArray;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
