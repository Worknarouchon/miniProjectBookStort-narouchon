import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { SaledetailPage } from '../../pages/saledetail/saledetail';

/**
 * Generated class for the LiteraturebooksdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-literaturebooksdetail',
  templateUrl: 'literaturebooksdetail.html',
})
export class LiteraturebooksdetailPage {
  book:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: BooksProvider) {
    console.log(navParams);
    var id = this.navParams.get('id');
    this.data.Idliteraturebooks(id).then(res=>{
      this.book=res;
    });
  }
  gotoSaledetailPage(){
    this.navCtrl.push(SaledetailPage);
  }

} 