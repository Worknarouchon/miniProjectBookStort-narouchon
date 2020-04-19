import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { HomebooksdetailPage } from '../../pages/homebooksdetail/homebooksdetail';

@IonicPage()
@Component({
  selector: 'page-homebooks',
  templateUrl: 'homebooks.html',
})
export class HomebooksPage {
  homebooks:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:BooksProvider) {
    this.data.loadhomebooks().then(result=>{
      this.homebooks=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(HomebooksdetailPage,{code:id});
  }
  goToHomebooksdetailPage(book_id:any){
   
    this.navCtrl.push(HomebooksdetailPage,{ id:book_id });
  }

}