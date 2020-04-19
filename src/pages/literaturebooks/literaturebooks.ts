import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { LiteraturebooksdetailPage } from '../../pages/literaturebooksdetail/literaturebooksdetail';
;
@IonicPage()
@Component({
  selector: 'page-literaturebooks',
  templateUrl: 'literaturebooks.html',
})
export class LiteraturebooksPage {
  literaturebooks:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:BooksProvider) {
    this.data.loadliteraturebooks().then(result=>{
      this.literaturebooks=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(LiteraturebooksdetailPage,{code:id});
  }
  goToLiteraturebooksdetailPage(book_id:any){
   
    this.navCtrl.push(LiteraturebooksdetailPage,{ id:book_id });
  }

}