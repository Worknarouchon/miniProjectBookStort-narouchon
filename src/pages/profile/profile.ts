import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  text:any="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private toast: Toast) {
  }

  Camera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

     this.camera.getPicture(options).then(cameraData => {
      this.text=cameraData.jpg
      this.toast.show("ถ่ายภาพเสร็จสิ้น","5000","bottom")
      .subscribe();
    });
  }
  }
