import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { YunovelbookdetailPage } from '../yunovelbookdetail/yunovelbookdetail';

@IonicPage()
@Component({
  selector: 'page-yunovelbook',
  templateUrl: 'yunovelbook.html',
})
export class YunovelbookPage {
  yunovelbook:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:BooksProvider) {
    this.data.loadyunovelbook().then(result=>{
      this.yunovelbook=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(YunovelbookdetailPage,{code:id});
  }
  goToYunovelbookdetailPage(book_id:any){
   
    this.navCtrl.push(YunovelbookdetailPage,{ id:book_id });
  }

}