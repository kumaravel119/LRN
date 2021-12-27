import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-pagination',
  templateUrl: './app-pagination.component.html',
  styleUrls: ['./app-pagination.component.scss']
})
export class AppPaginationComponent implements OnInit {

  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  
  pageChanged($event:any) {
    this.pageChange.emit($event);
  }

}
