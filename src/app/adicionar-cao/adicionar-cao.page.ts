import { Component, OnInit } from '@angular/core';
import { AdicionarCaoService } from '../services/adicionar-cao.service';
import { Cao } from '../models/estruturas';
import { Storage, getDownloadURL, uploadBytes } from '@angular/fire/storage';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { ref } from 'firebase/storage';
import { get } from 'http';

@Component({
  selector: 'app-adicionar-cao',
  templateUrl: './adicionar-cao.page.html',
  styleUrls: ['./adicionar-cao.page.scss'],
})
export class AdicionarCaoPage implements OnInit {
  image: any;
  cao: Cao = new Cao();
  submited = false;

  constructor(
    private adicionarCaoService: AdicionarCaoService,
    private storage: Storage
  ) {}

  ngOnInit(): void {}

  async selecionarFoto() {
    try {
      if (Capacitor.getPlatform() != 'web') {
        await Camera.requestPermissions();
      }
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl,
      });
      console.log('image: ', image);
      this.image = image.dataUrl;
      const blob = this.dataURLtoBlob(image.dataUrl);
      const url = await this.uploadImage(blob, image);
      console.log(url);
    } catch (e) {
      console.log(e);
    }
  }

  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  async uploadImage(blob: any, imageData: any) {
    try {
      const currentDate = Date.now();
      const filePath = 'test/${currentDate}.${imageData.format}';
      const fileRef = ref(this.storage, filePath);
      const task = await uploadBytes(fileRef, blob);
      console.log('task: ', task);
      const url = getDownloadURL(fileRef);
      return url;
    } catch (e) {
      throw e;
    }
  }

  adicionarCao(): void {
    this.adicionarCaoService.adicionarCao(this.cao).then(() => {
      console.log('Created new item successfully!');
      this.submited = true;
    });
  }
}
