import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-table-view',
  templateUrl: './app-table-view.component.html',
  styleUrls: ['./app-table-view.component.scss']
})
export class AppTableViewComponent implements OnInit {

  @Input() title:any;
  @Input() data:any;
  @Input() view:any;

  table:any;

  demo:any;

  collapsed:any = "collapse"

  spl:any;

  defaultLanguage ="Language"

  tableValues = [
    {
      id:1,
      status:"In Progress",
      date:"3 Jan 2022",
      content:"DPP008",
      title:"Information Security: An Overview",
      duration:"45 mins",
      language:"Language",
      calender:"Add to Calender"
    },
    {
      id:2,
      status:"In Progress",
      date:"3 Jan 2022",
      content:"DPP008",
      title:"Information Security: An Overview",
      duration:"45 mins",
      language:"Language",
      calender:"Add to Calender"
    },
    {
      id:3,
      status:"In Progress",
      date:"3 Jan 2022",
      content:"DPP008",
      title:"Information Security: An Overview",
      duration:"45 mins",
      language:"Language",
      calender:"Add to Calender"
    },
    {
      id:4,
      status:"In Progress",
      date:"3 Jan 2022",
      content:"DPP008",
      title:"Advance Inside Trading",
      duration:"45 mins",
      expand:"Expand",
      calender:"Add to Calender",
    },
     {
      id:5,
      status:"In Progress",
      date:"3 Jan 2022",
      content:"DPP008",
      title:"Information Security: An Overview",
      duration:"45 mins",
      language:"Language",
      calender:"Add to Calender"
    },
  ]

  subContent:any =
    {
      id:9,
      content:"DPP008",
      title:"Information Security: An Overview",
      duration:"45 mins",
      language:"Language",
    }

    subContent2:any = 
      {
        id:10,
        content:"DPP008",
        title:"Information Security: An Overview",
        duration:"45 mins",
        language:"Language",
    }
   
    Expand = "Expand"
    gridData:any;
  constructor() { }

  ngOnInit(): void {
    this.gridData = this.data;
    console.log(this.gridData);
    console.log(this.title);
  }

  open(){
    const value = this.tableValues.findIndex(element => element.id === 4);
    console.log(value);
    this.spl = this.tableValues.splice(value + 1 , 0, this.subContent,this.subContent2);
    console.log(this.spl);
   this.demo = true;
}

  collapse(){
    const value = this.tableValues.findIndex(element => element.id === 4);
    this.spl = this.tableValues.splice(value + 1, 2);
    this.demo = false;
  }
}
