import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'widget-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type = "text"
  @Input() mandatory = false
  @Input() label = ""
  @Input() placeHolder = ""
  @Input() icon = ""
  @Output() inputValue = new EventEmitter<string>()
  input(value:any){
    this.inputValue.emit(value)
  }
}
