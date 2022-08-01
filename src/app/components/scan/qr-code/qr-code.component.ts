import { Component, OnDestroy, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';


declare var initScan: any
declare var play: any
declare var stop: any

@Component({
  selector: 'spa-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit, OnDestroy {

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor() { 
    this.myAngularxQrCode = 'Your QR code data string';
  }
  ngOnDestroy(): void {
    stop();
  }

  ngOnInit(): void {
   initScan()
   play();
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

}
