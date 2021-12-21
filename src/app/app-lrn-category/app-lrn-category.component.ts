import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-lrn-category',
  templateUrl: './app-lrn-category.component.html',
  styleUrls: ['./app-lrn-category.component.scss']
})
export class AppLrnCategoryComponent implements OnInit {

  activeTab:Number = 0;

  tabName = [
    {
      id:1,
      name:'Login'
    },
    {
      id:2,
      name:'Home'
    },
    {
      id:2,
      name:"My Queue"
    },
    {
      id:3,
      name:"Disclosures"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  uiSelectTab(index:any){
    // if(this.activeTab === index) {return};
    this.activeTab = index;
  }

}
