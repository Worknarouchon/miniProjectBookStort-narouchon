import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookschinaPage } from '../bookschina/bookschina';
import { BookscomicPage } from '../bookscomic/bookscomic';
import { YunovelbookPage } from '../yunovelbook/yunovelbook';
import { HomebooksPage } from '../homebooks/homebooks';
import { LiteraturebooksPage } from '../literaturebooks/literaturebooks';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goToBookschinaPage(){
    this.navCtrl.push(BookschinaPage);
  }

  goToBookscomicPage(){
    this.navCtrl.push(BookscomicPage);
  }

  goToYunovelbookPage(){
    this.navCtrl.push(YunovelbookPage);
  }

  goToHomebooksPage(){
    this.navCtrl.push(HomebooksPage);
  }

  goToLiteraturebooksPage(){
    this.navCtrl.push(LiteraturebooksPage);
  }
}
