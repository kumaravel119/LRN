import { Component, OnInit } from '@angular/core';
import { CompletionHistoryService } from '../completion-history.service';
import { SearchhighlightService } from '../searchhighlight.service';
// import { filter } from 'lodash-es';

@Component({
  selector: 'app-completion-history-component',
  templateUrl: './completion-history-component.component.html',
  styleUrls: ['./completion-history-component.component.scss']
})
export class CompletionHistoryComponentComponent implements OnInit {

  title: any;
  dish: any;

  searchText = '';

  searchQuery:any;

  public response:any;

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
      title: `Cannada's correption of Foreign Public Officials Act(COFPA) and criminal code`,
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
    },
    {
      id: 5,
      contentid: 'HUR735',
      title: `Cannada's correption of Foreign Public Officials Act(COFPA) and criminal code`,
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
      title: 'Git & Entertainment Disclosures',
      time: '20 mins',
      date: '-',
      compdate: '10 oct 2021',
      action: '',
      key:true
    },
    {
      id: 2,
      review: 'Approved',
      contentid: 'ETH324',
      title: 'Code of Conduct Akcnowledgment',
      time: '19 mins',
      date: '-',
      compdate: '19 oct 2021',
      action: '',
      key:true
    },
    {
      id: 3,
      review: 'Pending Approval',
      contentid: 'HUR735',
      title: 'Git & Entertainment Disclosures',
      time: '20 mins',
      date: '-',
      compdate: '10 oct 2021',
      action:'',
      key:true
    }
  ]

  columns: any = {
    data: [
      {
        label: 'ContentID', apiKey: 'id', isSelected: true,sort:''
      },
      {
        label: 'Title', apiKey: 'title', isSelected: true,sort:''
      },
      {
        label: 'Time Spent', apiKey: 'time', isSelected: true,sort:''
      },
      {
        label: 'Due Date', apiKey: 'date', isSelected: true,sort:''
      },
      {
        label: 'Completion Date', apiKey: 'completion', isSelected: true,sort:''
      },
      {
        label: 'Action', apiKey: 'action', isSelected: true,sort:''
      },
    ],
    value: []
  }


  columnsForDis: any = {
    data: [
      {
        label: 'Review Status', apiKey: 'id', isSelected: true,sort:''
      },
      {
        label: 'ContentID', apiKey: 'id', isSelected: true,sort:''
      },
      {
        label: 'Title', apiKey: 'title', isSelected: true,sort:''
      },
      {
        label: 'Time Spent', apiKey: 'time', isSelected: true,sort:''
      },
      {
        label: 'Due Date', apiKey: 'date', isSelected: true,sort:''
      },
      {
        label: 'Completion Date', apiKey: 'completion', isSelected: true,sort:''
      },
      {
        label: 'Action', apiKey: 'action', isSelected: true,sort:''
      },
    ],
    value: []
  }
  gridColoumns: any = [];

  gridColoumnsDish:any =[];

  userFiels = [
    {
      display: 'ContentID',
      apiKey: 'contentid',
      overrideWidth: "150",
      size:1
    },
    {
      display: 'Title',
      apiKey: 'title',
      overrideWidth: "250",
      size:5
    },
    {
      display: 'Time Spent',
      apiKey: 'time',
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'Due Date',
      apiKey: 'date',
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'Completion Date',
      apiKey: 'compdate',
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'Actions',
      apiKey: 'action',
      type: 'text',
      overrideWidth: "200",
      size:1.5
    }
  ]

  userFielsForDish = [
    {
      display: "Review Status",
      apiKey: "review",
      type: "reviewstatus",
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'ContentID',
      apiKey: 'contentid',
      type: 'contenid',
      overrideWidth: "150",
      size:1
    },
    {
      display: 'Title',
      apiKey: 'title',
      type: 'title',
      overrideWidth: "250",
      size:3.5
    },
    {
      display: 'Time Spent',
      apiKey: 'time',
      type: 'toggle',
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'Due Date',
      apiKey: 'date',
      type: 'switch',
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'Submission Date',
      apiKey: 'compdate',
      type: 'pen',
      overrideWidth: "150",
      size:1.5
    },
    {
      display: 'Actions',
      apiKey: 'action',
      type: 'pencil',
      overrideWidth: "200",
      size:1.5
    }
  ]
  gridData: any = [];
  gridDisclosures: any = [];

  mandatoryTable:any;

  showClose :any;

  totalPage = "11"
  totalPageForDish = "3"

  isShowPaging:any;

  payload!: { limit: number; skip: any; sortOrder:any };

  selectOrder:any;

  itemPerPage:any;

  constructor(private searchService:SearchhighlightService,
    private completionService:CompletionHistoryService) { }

  ngOnInit(): void {
    // const data = this.completionService.getDataMendatoryTraining();
    // console.log(data);
    this.payload={
      limit:this.itemPerPage,
      skip:0,
      sortOrder:this.selectOrder
    }
    this.createColoumns();
    this.createColumnsDish();
    this.iFormTableForDish(this.gridDisclosures)
    this.iFormTableStructure(this.gridData);
    this.iGetMandatoryData(this.payload);
  }

  async iGetMandatoryData(data:any){
     this.response = await this.completionService.getDataMendatoryTraining(data).subscribe(data =>{
       this.response = data.data.list;
       this.response = data.data.pagination.totalCount;
       this.totalPage = this.response;
       console.log(this.totalPage);
       
        this.mandatoryTable = this.response;
        console.log(this.mandatoryTable);
        
      console.log(data);
    console.log(this.response);
    this.iFormTableStructure(data)
    });
    console.log(this.response);
    
  }

  iFormTableStructure(record: any) {
    console.log(record);
    
    if(record.data && record.data.list.length > 0){
      this.gridData = {
        columns: this.gridColoumns,
        rows: this.iCreaterows(this.gridColoumns, record.data.list)
    }

    }
    const len = Object.keys(this.gridData.rows).length;
    // console.log(len);
    this.title = `Training Taken (${len})`
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
    // console.log(this.gridColoumns);

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
          size=1
        } else if (element.apiKey === 'title') {
          type = "label"
          size=5
        } else if (element.apiKey === 'time') {
          type = "dropdown"
          size=1.5
        } else if (element.apiKey === 'date') {
          type = "check"
          size=1.5
        } else if (element.apiKey === 'compdate') {
          type = "toggle"
          size=1.5
        } else if (element.apiKey === 'action') {
          type = 'action'
          size=1.5
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
        // console.log(row);
      })
      rowArray.push(row)
      // console.log(rowArray);
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
      // console.log(gridColumns);
    })
    this.gridColoumnsDish = gridColumns
    // console.log(this.gridColoumns);

    // this.columns.data.forEach((column: any) => {
    //   column.isSelected = true;
    // });
  }

  iCreateRowForDish(col: any, list: any) {
    console.log(col);
    console.log(list);
    const rowArray: any = [];
    list.forEach((item: any) => {
      const row: any = [];
      col.forEach((element: any) => {
        let type = 'text';
        let size:any;
        let key;
        if (element.apiKey === 'review') {
          type = 'labelStatus'
          size=1.5
          key = false
        } else if (element.apiKey === 'contentid') {
          type = "text"
          size=1
          key = false
        } else if (element.apiKey === 'title') {
          type = "label"
          size = 3.5
          key = false
        } else if (element.apiKey === 'time') {
          type = "dropdown"
          size=1.5
          key = false
        } else if (element.apiKey === 'date') {
          type = "check"
          size=1.5
          key = false
        } else if (element.apiKey === 'compdate') {
          type = "toggle"
          size=1.5
          key = false
        } else if (element.apiKey === 'action') {
          type = 'action'
          size=1.5
          key = true;
        }
        let obj: any;
        // if()
        obj = {
          id: item.id,
          value: item[element.apiKey],
          type,
          size,
          key
        }
        row.push(obj);
        // console.log(row);
      })
      rowArray.push(row)
      console.log(rowArray);
    });
    // return rowArray;
    return rowArray;
  }

  iFormTableForDish(record: any) {
    this.gridDisclosures = {
      columns: this.gridColoumnsDish,
      rows: this.iCreateRowForDish(this.gridColoumnsDish, this.apiDataForDish)
    }
    console.log(this.gridDisclosures);
    const len = Object.keys(this.gridDisclosures.rows).length
    console.log(len);
    
    this.dish = `Disclosures Submitted (${len})`
  }
 async pageChange($event:any){
   const params = {
     limit:this.itemPerPage,
     skip:($event.movePage) * this.itemPerPage
   }
   this.payload = {
     limit:params.limit,
     skip:params.skip,
     sortOrder:''
   }
  }

  onSearchChange(event:any){
    this.searchService.searchedWord.next(event.target.value);
    this.searchQuery = event.target.value;
//     if(this.searchQuery = ""){
//       this.searchQuery="";
// ;    }
    console.log(this.searchQuery);
    // this.showClose = true;
    console.log(event);
    // console.log(back);
    
  }

  // private iGetData(payload:any){
  //   this.response = this.apiData
  // }

  cancel(){
      this.searchQuery="";
      this.searchService.searchedWord.next('');
      (<HTMLInputElement>document.getElementById("myInput")).value = "";
    // var target = (event && event.target);
    // target.nextElementSibling.style.display = target.value ? 'block' : 'none';
    console.log(this.searchQuery);
  }

  sortingTable($event:any){
    console.log($event.sort);
    this.selectOrder = $event.sort ==='asc' ? `${$event.apiKey}` : `${$event.apiKey}_desc`;
    console.log(this.selectOrder);
    const params = {
      limit:this.payload.limit,
      skip:this.payload.skip,
      sortOrder:this.selectOrder
    }
  }

}
