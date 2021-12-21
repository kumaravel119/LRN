import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-different-dropdown',
  templateUrl: './different-dropdown.component.html',
  styleUrls: ['./different-dropdown.component.scss']
})
export class DifferentDropdownComponent implements OnInit {

  module = "change"

  course = "Select";

  moduleSelect = [
    {
      id:1,
      name:"Module1",
      isSelected:false
    },
    {
      id:2,
      name:"Module 2",
      isSelected:false
    },
    {
      id:3,
      name:'Module 3',
      isSelected:false
    }
  ]

  courseSelect = [
    {
      id:1,
      name:'Angular',
      isSelect:false
    },
    {
      id:2,
      name:"React",
      isSelected:false
    },
    {
      id:3,
      name:"Vue",
      isSelected:false
    }
  ]

  selectData = [
    {
      id:1,
      name:"Module",
      isSelected:false,
      key:"mod"
    },
    {
      id:2,
      name:"Course",
      isSelected:false,
      key:'cou'
    }
  ]

  selectedData:any=""

  constructor() { }

  ngOnInit(): void {
  }

  updateValue(data:any){
    this.selectedData = data;
    console.log(this.selectData);
  }

}
