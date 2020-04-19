import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaledetailPage } from '../../pages/saledetail/saledetail';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html',
})
export class SalePage {
  todolist:any[]=[];
  temp:any={title:"",description:"",price:"",note:""};
  
  constructor(public navCtrl: NavController, public storage:Storage) {
      this.storage.get('todoDetails').then((val)=>{
        this.todolist=val;
      });
    }
      
  ngOnInit() {
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
  });
  }
  ionVieWillEnter(){
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
  }
  
  ionViewDidEnter(){
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
  }
  
  gotoNweactivity(){
    this.navCtrl.push(SaledetailPage);
  }
  removeItem(todo){
    let index = this.todolist.indexOf(todo);
    if(index>-1){
      this.todolist.splice(index,1);
      this.storage.set('todoDetails',this.todolist);
    }
  }
  }
  