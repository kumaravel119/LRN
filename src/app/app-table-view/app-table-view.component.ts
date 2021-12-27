import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-app-table-view',
  templateUrl: './app-table-view.component.html',
  styleUrls: ['./app-table-view.component.scss']
})
export class AppTableViewComponent implements OnInit {

  @Input() title: any;
  @Input() data: any;
  @Input() view: any;
  @Input() showPaging: any;

  @Output() ipageChange: any = new EventEmitter();
  @Output() iSortColumn: any = new EventEmitter();

  searchText = 'con';

  anyChange: any;

  hideSortIcon: any;

  sortHide = true;

  table: any;

  demo: any;

  collapsed: any = "collapse"

  spl: any;

  defaultLanguage = "Language"

  pagination: any;

  page: any = 1;

  tableValues = [
    {
      id: 1,
      status: "In Progress",
      date: "3 Jan 2022",
      content: "DPP008",
      title: "Information Security: An Overview",
      duration: "45 mins",
      language: "Language",
      calender: "Add to Calender"
    },
    {
      id: 2,
      status: "In Progress",
      date: "3 Jan 2022",
      content: "DPP008",
      title: "Information Security: An Overview",
      duration: "45 mins",
      language: "Language",
      calender: "Add to Calender"
    },
    {
      id: 3,
      status: "In Progress",
      date: "3 Jan 2022",
      content: "DPP008",
      title: "Information Security: An Overview",
      duration: "45 mins",
      language: "Language",
      calender: "Add to Calender"
    },
    {
      id: 4,
      status: "In Progress",
      date: "3 Jan 2022",
      content: "DPP008",
      title: "Advance Inside Trading",
      duration: "45 mins",
      expand: "Expand",
      calender: "Add to Calender",
    },
    {
      id: 5,
      status: "In Progress",
      date: "3 Jan 2022",
      content: "DPP008",
      title: "Information Security: An Overview",
      duration: "45 mins",
      language: "Language",
      calender: "Add to Calender"
    },
  ]

  subContent: any =
    {
      id: 9,
      content: "DPP008",
      title: "Information Security: An Overview",
      duration: "45 mins",
      language: "Language",
    }

  subContent2: any =
    {
      id: 10,
      content: "DPP008",
      title: "Information Security: An Overview",
      duration: "45 mins",
      language: "Language",
    }

  Expand = "Expand"
  gridData: any;
  constructor() { }

  ngOnInit(): void {
    this.gridData = this.data;
    console.log(this.searchText);
    console.log(this.gridData,"when");
    // console.log(this.title);
  }


  pageChanged($event: any) {
    this.pagination = {
      currentPage: this.page,
      movePage: $event
    }
    this.ipageChange.emit(this.pagination);
    this.page = $event;
  }

  sortColumn(column: any) {
    console.log(column);
    if (column.sort === 'false' || column.sort === false) {
      return;
    }

    // column.sort = column.sort === 'asc' ? 'desc' : 'asc';
    // const selectHeader = column.label;
    // console.log(selectHeader);

    this.gridData.columns.map((x: any) => {
      if (x.display === column.display) {
        x.sort = x.sort === 'asc' ? 'desc' : 'asc';
      } else {
        x.sort = "";
      }
    });
    this.iSortColumn.emit(column);
    console.log(column);
  }

  open() {
    const value = this.tableValues.findIndex(element => element.id === 4);
    console.log(value);
    this.spl = this.tableValues.splice(value + 1, 0, this.subContent, this.subContent2);
    console.log(this.spl);
    this.demo = true;
  }

  collapse() {
    const value = this.tableValues.findIndex(element => element.id === 4);
    this.spl = this.tableValues.splice(value + 1, 2);
    this.demo = false;
  }
}
