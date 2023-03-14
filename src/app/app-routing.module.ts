import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StandardComponent } from './components/standard/standard/standard.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"standard",
    pathMatch:"full"
  },
  {
    path:"standard",
    component:StandardComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
