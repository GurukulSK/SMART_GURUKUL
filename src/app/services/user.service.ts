import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '../config/ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  /*

    All the api from start here for User

  */

  //This is api is for do login and get token
  LoginApi(body: any) {
    return this.http.post(ApiConfig.UserApiUrl,body);
  }
  //This api for get current yea
  GetCurrentYearApi() {
    return this.http.get(ApiConfig.GetCurrentYearApiUrl,);
  }

  SetCurrentYear(id:any){
    return this.http.post(ApiConfig.SetCurrentYearApiUrl,{yearId:id})
  }


  GetAllYear(){
    return this.http.get(ApiConfig.YearListApiUrl)
  }


}
