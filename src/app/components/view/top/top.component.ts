import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'spa-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  nome = ''; 
  picture = ''; 
  isVisible = true;


  user: User = {} as User

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.isVisible = true;
    this.user = JSON.parse(localStorage.getItem('user')!)
    this.nome = this.user.given_name
    this.picture = this.user.picture
    if(this.route.url.includes('/pedido')){
      this.isVisible = false;
    }
  }

}
