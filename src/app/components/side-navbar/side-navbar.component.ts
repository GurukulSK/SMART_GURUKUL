import { AfterViewInit, Component, Output } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent{
  constructor(private subject:SubjectService){}
  onRouterLinkActive(event:any){
    this.subject.SetTopBarTitle(event)
  }
}
