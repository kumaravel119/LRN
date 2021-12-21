import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-progress',
  templateUrl: './app-progress.component.html',
  styleUrls: ['./app-progress.component.scss']
})
export class AppProgressComponent implements OnInit {

  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
