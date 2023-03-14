import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SMART_GURUKUL';
  login = false;
  constructor(private router:Router){}
  ngOnInit(){
    this.router.events.subscribe((event ) =>{
      if(event instanceof NavigationEnd){
        if(event.url == "/login"){
          this.login = true
        }
        else{
          this.login = false

        }
      }
    })
  }
  active(){
    // this.router.url
    if(this.router.url == "/login"){
      this.login = true
    }
    else{
      this.login = false
    }
  }
}
