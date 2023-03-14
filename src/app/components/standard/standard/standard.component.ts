import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listAnimation } from 'src/app/animation';
import { Std_Model } from 'src/app/model/std_model';
import { StandardService } from 'src/app/services/standard.service';
import { StandardEditComponent } from '../standard-edit/standard-edit.component';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss'],
  providers: [DatePipe],
  animations:[listAnimation]
})
export class StandardComponent implements OnInit {
  std_list: any= "";
  Add_std: Std_Model = {
    standardId: 0,
    name: '',
    startDate: this.DatePipe.transform(new Date(), 'yyyy-MM-dd'),
    endDate: '',
  };
  constructor(
    private std: StandardService,
    private dialog: MatDialog,
    private DatePipe: DatePipe
  ) {}

  ngOnInit() {
    this.std.GetAllStandard().subscribe((data) => {
      this.std_list = data;
    });
  }
  opendilog(std: any, index: number) {
    console.log(std);
    let edit_dilog = this.dialog.open(StandardEditComponent, {
      data: std,
    });
    edit_dilog.afterClosed().subscribe((data) => {
      if (data) {
        this.std_list[index] = data;
      }
    });
  }
  AddStdandard(){
    let dialog = this.dialog.open(StandardEditComponent, {
      data: this.Add_std,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.std_list.push(data);
      }
    });
  }
}
