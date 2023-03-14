import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../config/ApiConfig';
@Injectable({
  providedIn: 'root'
})
export class StandardService {

  constructor(private http:HttpClient) { }

  SetStandard(body:unknown){
    return this.http.post(ApiConfig.SetStandardApiUrl,body)
  }
  GetAllStandard(){
    return this.http.get(ApiConfig.GetStandardListApiUrl)
  }
}
