import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YunovelbookPage } from '../yunovelbook/yunovelbook';
import { NewsPage } from '../news/news';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public http:Http) {

  }

  goToYunovelbookPage(){
    this.navCtrl.push(YunovelbookPage);
  }

  goToNewsPage(){
    this.navCtrl.push(NewsPage);
  }
  
}
