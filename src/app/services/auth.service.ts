import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router :Router) { }

  getToken(){
    let token = localStorage.getItem('token')
    if(token){
        return token
    }
    else{
      this.router.navigateByUrl('/login')
      return
    }
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    this.router.navigateByUrl('/login')
  }
}
