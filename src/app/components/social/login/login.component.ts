import { Component, ComponentFactoryResolver, Directive, NgModule, OnDestroy, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/AuthService';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { CookiesService } from 'src/app/services/CookiesService';
import { interval, Subscription } from 'rxjs';
import { RouterService } from 'src/app/services/RouterService';
import { FrameLoginComponent } from '../frame-login/frame-login.component';
import { FrameDirective } from '../diretivas/frame.directive';
import { AdComponent } from '../diretivas/ad.component';
import { MensagemService } from 'src/app/services/MensagemService';

 
declare var FB: any
declare var google: any 
var navigate: Router

var user: User = {}

@Component({
  selector: 'spa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit, OnDestroy {

  user: User = {}
  interval = {} as any

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: "731978274268-sbo35fdt0t1egp1ci26c43j86m55133o.apps.googleusercontent.com",
      context: "signin",
      auto_select: "true",
      ux_mode: "popup",
      callback: this.handleCredentialResponse 

    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        type: "standard",
        shape: "pill",
        theme: "filled_black",
        text: "$ {button.text}",
        size: "large",
        logo_alignment: "center",
        width: "250"

      }
    );
    google.accounts.id.prompt();

    FB.init({
      appId: '322371943411039',
      version: 'v14.0'
    });


    
    this.interval = setInterval(() => {
      this.facebook()
    }, 15000)

    FB.XFBML.parse()
    this.routerService.savePreviosPage(this.router.url)
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  constructor(
    private router: Router,
    private routerService: RouterService,
    private mensagemService: MensagemService
  ) {
    navigate = router
  }
 
  public handleCredentialResponse(response: any) {
    var credential = response.credential
    var base64Url = credential.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var payload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    this.user = JSON.parse(payload)

    if (this.user != null) {
      console.log('Checando google ' + localStorage.getItem('isLogado'))
      localStorage.setItem("isLogado", "true")
      localStorage.setItem("type", "google")
      localStorage.setItem("user", JSON.stringify(this.user)) 
        localStorage.setItem("name", this.user.name!)
    }
  }

  private facebook() {
    console.log('Checando status facebook ' + localStorage.getItem('isLogado'))
    console.log('Type ' + localStorage.getItem('type'))
    if(localStorage.getItem('isLogado') == 'false'){
    FB.getLoginStatus(function (response: any) {
      if (response && response.status === 'connected') {
        FB.api('/me?fields=id,name,email,picture', function (response: any) {
          console.log('Checando status facebook ' + JSON.stringify(response))
          user = JSON.parse(JSON.stringify(response))
          

          if (user != null) {
            localStorage.setItem("type", "facebook")
            localStorage.setItem("isLogado", "true")
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("name", user.name!)
          }
        });
      }
    });
  }
  else{
    navigate.navigate(["/pagamento"])
  }
}
}
