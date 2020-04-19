import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YunovelbookPage } from './yunovelbook';

@NgModule({
  declarations: [
    YunovelbookPage,
  ],
  imports: [
    IonicPageModule.forChild(YunovelbookPage),
  ],
})
export class YunovelbookPageModule {}
