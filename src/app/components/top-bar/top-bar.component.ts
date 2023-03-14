import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @Input() login = false;
  YearList: any;
  SelectedYear = '';
  title="";
  constructor(
    private router: Router,
    private user: UserService,
    private subject: SubjectService
  ) {}
  ngOnInit(): void {
    this.subject.NavTitle.subscribe((name)=>{
      this.title = name
    })
    this.user.GetAllYear().subscribe(
      async (data) => {
        this.YearList = await data;
        this.user.GetCurrentYearApi().subscribe((data: any) => {
          this.SelectedYear = this.YearList[data.yearId - 1].yearHead;
        });
      },
      (err) => {
        // this.node.error_set(err.message, 'warning');
        console.log(err);
      }
    );
  }
  YearMenuClick = false;
  refresh() {
    let url = this.router.url;
    this.router
      .navigateByUrl('login', { skipLocationChange: true })
      .then(() => {
        this.router.navigateByUrl(url);
      });
  }

  YearChangeSelect(i: number) {
    this.SelectedYear = this.YearList[i - 1].yearHead;
    this.user.SetCurrentYear(i).subscribe(
      (data: any) => {
        this.SelectedYear = this.YearList[data.yearId - 1].yearHead;
        this.refresh();
      },
      (err) => {
        // this.node.error_set(err, 'warning');
        console.log(err);
      }
    );
  }
  LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.router.navigate(['login']);
  }
}
