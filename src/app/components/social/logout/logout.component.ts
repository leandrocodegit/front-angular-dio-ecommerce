import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'spa-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
    console.log('CRSF ' + document.cookie) 
  }

  sair(){
    //var crsf = self.request.cookies.get('g_state') 
    console.log('CRSF ' + document.cookie) 
  }

}
