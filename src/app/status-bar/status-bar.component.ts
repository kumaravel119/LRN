import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  @Input() data:any;
  @Output() sendMyqueueValue = new EventEmitter<any>();
  @Output() sendDisclosuresValue = new EventEmitter<any>();

 
  constructor() { }

  ngOnInit(): void {
    console.log("success");
    
  }

  sendMyqueu(){
    this.sendMyqueueValue.emit("myQueue")
  }

  sendDisclosures(){
    this.sendDisclosuresValue.emit("disclosures")
  }

}
