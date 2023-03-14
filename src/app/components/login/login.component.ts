import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
export class login {
  username!: String | undefined;
  password!: String | undefined;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[login]
})
export class LoginComponent {
  ShowPassword: boolean = false;
  click = false;
  Tost = false;
  TostType = 'success';
  TostText = 'Success Full';
  UsernameError: boolean = false;
  PasswordError: boolean = false;
  ErrorText: any;
  warning: boolean = false;
  error: boolean = false;
  constructor(
    private user: UserService,
    public loginInterface: login,
    private router: Router
  ) {
    if(localStorage.getItem('token')){
      this.router.navigate(['/'],{replaceUrl: true})
    }
  }
  toggalepass() {
    this.ShowPassword = !this.ShowPassword;
    (document.getElementById('passwordFild') as HTMLInputElement).type = this
      .ShowPassword
      ? 'text'
      : 'password';
  }
  login() {
    // this.click = !this.click;
    this.click = true;
    this.UsernameError = false;
    this.PasswordError = false;
    if (this.loginInterface.username == undefined) {
      this.UsernameError = true;
      this.click = false;
      return;
    }
    if (this.loginInterface.password == undefined) {
      this.PasswordError = true;
      this.click = false;
      return;
    }
    if (this.PasswordError == false && this.UsernameError == false) {
      let body = {
        username: this.loginInterface.username,
        password:this.loginInterface.password,
      };
      this.user.LoginApi(body).subscribe(
        (data:any) => {
          localStorage.setItem("name",data.displayName);
          localStorage.setItem("token",data.token);
          this.router.navigate(['/'],{replaceUrl: true})
        },
        (err: { error: { errorMessage: any; }; }) => {
          this.error = true;
          console.log(err);
          this.ErrorText = err.error.errorMessage;
          this.click = false
        }
      );
    }
    setTimeout(() => {
      this.error = false;
      this.warning = false;
    }, 6000);
  }
}
