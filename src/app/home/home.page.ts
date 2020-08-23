import { Component } from '@angular/core';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fingerprintOptions: FingerprintOptions;
  constructor(private faio: FingerprintAIO , private platform: Platform ) {
    this.fingerprintOptions = {
      title: 'fingerprint-demo',
      subtitle: 'password',
      disableBackup: true
  };
  }


  async mostrar() {
    try {
      await this.platform.ready();
      const finger = await this.faio.isAvailable();
      console.log(finger);
      if (finger === 'OK') {
        const result = await this.faio.show(this.fingerprintOptions);
        console.log(result);
      }
    }catch(e) {
      console.error(e);
    }

  }

}
