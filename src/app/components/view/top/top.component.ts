import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

declare var FB: any
var navigate: Router

@Component({
  selector: 'spa-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  nome?: string = '';
  picture?: string = '';
  total?: string = '4952.98';
  isVisible = true;


  user: User = {} as User

  constructor(private route: Router) {
    navigate = route
   }

  ngOnInit(): void {
    this.isVisible = true;
    if (localStorage.getItem('isLogado') === 'true') {
      this.user = JSON.parse(localStorage.getItem('user')!)
      if (this.user != null) {
        this.nome = this.user.given_name
        this.isVisible = true
        console.log('Type ' + typeof this.user.picture)
        if (typeof this.user.picture != "string") {
          this.picture = this.user.picture.data.url
          this.nome = this.user.name?.split(' ')[0]
          console.log('URL ' + this.user.picture.data.url)
        }
        else {
          this.picture = this.user.picture
        }
      }
    }
    else {
      this.picture = 'assets/img/user.png';
      this.isVisible = false
    }

  }

  sair() {
    FB.init({
      appId: '322371943411039',
      version: 'v14.0'
    });
    FB.getLoginStatus(function (response: any) {
      if (response && response.status === 'connected') {
        FB.logout(function (response: any) {
          console.log('Logout ' + response)
        });
      }
    });
     
    localStorage.setItem("isLogado", "false")
    navigate.navigate(["/"])
    console.log('Logout ' + localStorage.getItem('isLogado') ) 
  }

}
