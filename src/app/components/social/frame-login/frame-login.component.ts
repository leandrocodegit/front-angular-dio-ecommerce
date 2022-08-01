import { Component, Directive, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/AuthService'; 
import { CookiesService } from 'src/app/services/CookiesService';
import { interval, Subscription } from 'rxjs';
import { RouterService } from 'src/app/services/RouterService';
 
  declare var initFacebook: any
  declare var parseJwt: any
  declare var google: any
  declare var login: any
  declare var getPayLoad: any
 
  @Component({
    selector: 'spa-login',
    templateUrl: './frame-login.component.html',
    styleUrls: ['./frame-login.component.css']
  })
  export class FrameLoginComponent implements OnInit, OnDestroy {
   
    constructor(       
    public viewContainerRef: ViewContainerRef
    ) { }
    ngOnDestroy(): void {
       
     // location.reload()
    }
  
    ngOnInit() {
      
     // this.cookieService.deleteCookie("fbsr_322371943411039")
     // initFacebook()

   
    }
   
  
  }
  