import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsdetailPage } from '../newsdetail/newsdetail';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  business:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    //get API
    this.http.get("http://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=c9e603c80d3641389a826c4fe56addbe").map(res=>res.json()).subscribe(data=>{
      this.business=data.articles;
      console.log(this.business);
    });
    
  }
  
  gotoDetail(item:any){
    this.navCtrl.push(NewsdetailPage,{item:item})
  }

}
