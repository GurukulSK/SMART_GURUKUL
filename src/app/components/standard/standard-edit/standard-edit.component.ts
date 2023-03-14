import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Std_Model } from 'src/app/model/std_model';
import { StandardService } from 'src/app/services/standard.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-standard-edit',
  templateUrl: './standard-edit.component.html',
  styleUrls: ['./standard-edit.component.scss'],
  providers:[DatePipe]

})
export class StandardEditComponent {
  click = false;
  startDate_err=false;
  endDate_err=false;
  name_err =false
  constructor(private DatePipe:DatePipe,private StdService:StandardService,
    public dialogRef: MatDialogRef<StandardEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Std_Model,
  ) {}
  copy_data:Std_Model={
    standardId : this.data.standardId,
    name:this.data.name,
    startDate:this.data.startDate,
    endDate:this.data.endDate
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  AddStd(){
    this.click = true
    if(this.copy_data.name == ""){
      this.name_err = true
      this.startDate_err= false
      this.endDate_err= false
      this.click = false
      return
    }
    if(this.copy_data.endDate == ""){
      this.name_err = false
      this.startDate_err= false
      this.endDate_err= true
      this.click = false
      return
    }
    if(this.copy_data.startDate == ""){
      this.name_err = false
      this.startDate_err= true
      this.endDate_err= false
      this.click = false
      return
    }
    this.copy_data.endDate = this.DatePipe.transform(this.copy_data.endDate,"yyyy-MM-dd")
    this.copy_data.startDate = this.DatePipe.transform(this.copy_data.startDate,"yyyy-MM-dd")
      this.StdService.SetStandard(this.copy_data).subscribe((data:any)=>{
      this.dialogRef.close(this.copy_data)
    },(err)=>{
      // this.NodeService.error_set(err.error.errorMessage,"warning")
      console.log(err);

      this.dialogRef.close()
    })
  }
  Reset(){
    this.copy_data = {
      standardId : this.data.standardId,
      name:this.data.name,
      startDate:this.data.startDate,
      endDate:this.data.endDate
    };
  }
}
