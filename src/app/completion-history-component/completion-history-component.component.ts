import { Component, OnInit } from '@angular/core';
// import { filter } from 'lodash-es';

@Component({
  selector: 'app-completion-history-component',
  templateUrl: './completion-history-component.component.html',
  styleUrls: ['./completion-history-component.component.scss']
})
export class CompletionHistoryComponentComponent implements OnInit {

  title: any;
  dish: any;

  apiData = [
    {
      id: 1,
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 2,
      contentid: 'ETH324',
      title: 'Ethical Behavior',
      time: '19 mins',
      date: '29 sep 2021',
      compdate: '19 oct 2021',
      action: ''
    },
    {
      id: 3,
      contentid: 'ETH123',
      title: 'Preventing and Responding to microaggressions',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 4,
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 5,
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 6,
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 7,
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 8,
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    }
  ]

  apiDataForDish = [
    {
      id: 1,
      review: 'Approved',
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action: ''
    },
    {
      id: 2,
      review: 'Approved',
      contentid: 'ETH324',
      title: 'Ethical Behavior',
      time: '19 mins',
      date: '29 sep 2021',
      compdate: '19 oct 2021',
      action: ''
    },
    {
      id: 3,
      review: 'Pending Approval',
      contentid: 'HUR735',
      title: 'Conflict of Intrest',
      time: '20 mins',
      date: '21 sep 2021',
      compdate: '10 oct 2021',
      action:[
        {
          label:'pop'
        }
      ]
    }
  ]

  columns: any = {
    data: [
      {
        label: 'ContentID', apiKey: 'id', isSelected: true
      },
      {
        label: 'Title', apiKey: 'title', isSelected: true
      },
      {
        label: 'Time Spent', apiKey: 'time', isSelected: true
      },
      {
        label: 'Due Date', apiKey: 'date', isSelected: true
      },
      {
        label: 'Completion Date', apiKey: 'completion', isSelected: true
      },
      {
        label: 'Action', apiKey: 'action', isSelected: true
      },
    ],
    value: []
  }


  columnsForDis: any = {
    data: [
      {
        label: 'Review Status', apiKey: 'id', isSelected: true
      },
      {
        label: 'ContentID', apiKey: 'id', isSelected: true
      },
      {
        label: 'Title', apiKey: 'title', isSelected: true
      },
      {
        label: 'Time Spent', apiKey: 'time', isSelected: true
      },
      {
        label: 'Due Date', apiKey: 'date', isSelected: true
      },
      {
        label: 'Completion Date', apiKey: 'completion', isSelected: true
      },
      {
        label: 'Action', apiKey: 'action', isSelected: true
      },
    ],
    value: []
  }
  gridColoumns: any = [];

  userFiels = [
    {
      display: 'ContentID',
      apiKey: 'contentid',
      overrideWidth: "150",
      size:2
    },
    {
      display: 'Title',
      apiKey: 'title',
      overrideWidth: "250",
      size:4
    },
    {
      display: 'Time Spent',
      apiKey: 'time',
      overrideWidth: "150",
      size:2
    },
    {
      display: 'Due Date',
      apiKey: 'date',
      overrideWidth: "150",
      size:2
    },
    {
      display: 'Completion Date',
      apiKey: 'compdate',
      overrideWidth: "150",
      size:2
    },
    {
      display: 'Actions',
      apiKey: 'action',
      type: 'text',
      overrideWidth: "200",
      size:2
    }
  ]

  userFielsForDish = [
    {
      display: "Review Status",
      apiKey: "review",
      type: "reviewstatus",
      overrideWidth: "150"
    },
    {
      display: 'ContentID',
      apiKey: 'contentid',
      type: 'contenid',
      overrideWidth: "150"
    },
    {
      display: 'Title',
      apiKey: 'title',
      type: 'title',
      overrideWidth: "250"
    },
    {
      display: 'Time Spent',
      apiKey: 'time',
      type: 'toggle',
      overrideWidth: "150"
    },
    {
      display: 'Due Date',
      apiKey: 'date',
      type: 'switch',
      overrideWidth: "150"
    },
    {
      display: 'Submission Date',
      apiKey: 'compdate',
      type: 'pen',
      overrideWidth: "150"
    },
    {
      display: 'Actions',
      apiKey: 'action',
      type: 'pencil',
      overrideWidth: "200"
    }
  ]
  gridData: any = [];
  gridDisclosures: any = [];

  totalPage = "11"
  totalPageForDish = "3"

  constructor() { }

  ngOnInit(): void {
    this.createColoumns();
    this.createColumnsDish();
    this.iFormTableForDish(this.gridDisclosures)
    this.iFormTableStructure(this.gridData)
  }

  iFormTableStructure(record: any) {
    this.gridData = {
      columns: this.gridColoumns,
      rows: this.iCreaterows(this.gridColoumns, this.apiData)
    }
    const len = Object.keys(this.gridData.rows).length;
    console.log(len);
    this.title = `Training Taken(${len})`
  }
  createColoumns() {
    const gridColumns: any = [];
    this.userFiels.forEach((arr) => {
      const obj = {
        ...arr,
        label: arr.display,
        display: arr.display,
        sort: '',
        color: '',
        apiKey: arr.apiKey,
        isSelected: true
      }
      gridColumns.push(obj);
    })
    this.gridColoumns = gridColumns
    console.log(this.gridColoumns);

    // this.columns.data.forEach((column: any) => {
    //   column.isSelected = true;
    // });
    // this.columns.value = filter(this.columns.data, ($0:any) => $0.isSelected);
  }

  iCreaterows(col: any, list: any) {
    console.log(col);
    console.log(list);
    const rowArray: any = [];
    list.forEach((item: any) => {
      const row: any = [];
      col.forEach((element: any) => {
        let type = 'text';
        let size:any;
        if (element.apiKey === 'contentid') {
          type = "text"
          size=2
        } else if (element.apiKey === 'title') {
          type = "label"
          size=4
        } else if (element.apiKey === 'time') {
          type = "dropdown"
          size=2
        } else if (element.apiKey === 'date') {
          type = "check"
          size=2
        } else if (element.apiKey === 'compdate') {
          type = "toggle"
          size=2
        } else if (element.apiKey === 'action') {
          type = 'action'
          size=2
        }
        let obj: any;
        // if()
        obj = {
          id: item.id,
          value: item[element.apiKey],
          type,
          size
        }
        row.push(obj);
        console.log(row);
      })
      rowArray.push(row)
      console.log(rowArray);
    });
    // return rowArray;
    return rowArray;
  }

  createColumnsDish() {
    const gridColumns: any = [];
    this.userFielsForDish.forEach((arr: any) => {
      const obj = {
        ...arr,
        label: arr.display,
        display: arr.display,
        sort: '',
        color: '',
        apiKey: arr.apiKey,
        isSelected: true
      }
      gridColumns.push(obj);
    })
    this.gridDisclosures = gridColumns
    console.log(this.gridColoumns);

    // this.columns.data.forEach((column: any) => {
    //   column.isSelected = true;
    // });
  }

  iCreateRowForDish(col: any, list: any) {
    const rowArray: any = [];
    list.forEach((item: any) => {
      const row: any = [];
      col.forEach((element: any) => {
        let type = 'text';
        if (element.apiKey === 'review') {
          type = 'labelStatus'
        } else if (element.apiKey === 'contentid') {
          type = "text"
        } else if (element.apiKey === 'title') {
          type = "label"
        } else if (element.apiKey === 'time') {
          type = "dropdown"
        } else if (element.apiKey === 'date') {
          type = "check"
        } else if (element.apiKey === 'compdate') {
          type = "toggle"
        } else if (element.apiKey === 'action') {
          type = 'action'
        }
        let obj: any;
        // if()
        obj = {
          id: item.id,
          value: item[element.apiKey],
          type,
        }
        row.push(obj);
        console.log(row);
      })
      rowArray.push(row)
      console.log(rowArray);
    });
    // return rowArray;
    return rowArray;
  }

  iFormTableForDish(record: any) {
    this.gridDisclosures = {
      columns: this.gridDisclosures,
      rows: this.iCreateRowForDish(this.gridDisclosures, this.apiDataForDish)
    }
    const len = Object.keys(this.gridDisclosures.rows).length
    console.log(len);
    
    this.dish = `Disclosures Submitted(${len})`
  }
}
