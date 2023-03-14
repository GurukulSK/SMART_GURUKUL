import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { BarsComponent } from './icon/bars/bars.component';
import { UserComponent } from './icon/user/user.component';
import { DashboardComponent } from './icon/dashboard/dashboard.component';
import { LoadderComponent } from './widget/loadder/loadder.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { InputComponent } from './widget/input/input.component';
import { StandardComponent } from './components/standard/standard/standard.component';
import { StandardEditComponent } from './components/standard/standard-edit/standard-edit.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    BarsComponent,
    UserComponent,
    DashboardComponent,
    LoadderComponent,
    LoginComponent,
    TopBarComponent,
    InputComponent,
    StandardComponent,
    StandardEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
