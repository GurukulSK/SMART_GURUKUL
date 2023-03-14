import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  NavTitle= new Subject<any>();


  SetTopBarTitle(value:any){
    this.NavTitle.next(value)
  }
}
