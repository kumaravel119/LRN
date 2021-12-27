import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CompletionHistoryComponentComponent } from './completion-history-component.component';

fdescribe('CompletionHistoryComponentComponent', () => {
  let component: CompletionHistoryComponentComponent;
  let fixture: ComponentFixture<CompletionHistoryComponentComponent>;

  const columnsDish = [
    { apiKey: "contentid", color: "", display: "ContentID", isSelected: true, label: "ContentID", overrideWidth: "150", size: 1, sort: "" },
    { apiKey: "title", color: "", display: "Title", isSelected: true, label: "Title", overrideWidth: "250", size: 5, sort: "" },
    { apiKey: "time", color: "", display: "Time Spent", isSelected: true, label: "Time Spent", overrideWidth: "150", size: 1.5, sort: "" },
    { apiKey: "date", color: "", display: "Due Date", isSelected: true, label: "Due Date", overrideWidth: "150", size: 1.5, sort: "" },
    { apiKey: "compdate", color: "", display: "Completion Date", isSelected: true, label: "Completion Date", overrideWidth: "150", size: 1.5, sort: "" },
    { apiKey: "action", color: "", display: "Actions", isSelected: true, label: "Actions", overrideWidth: "200", size: 1.5, sort: "", type: "text" }
  ]

  const rowsDish = [
    { id: 1, size: 1, type: "text", value: "HUR735" },
    { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
    { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
    { id: 1, size: 1.5, type: "check", alue: "21 sep 2021" },
    { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
    { id: 1, size: 1.5, type: "action", value: "" },
    { id: 1, size: 1, type: "text", value: "HUR735" },
    { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
    { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
    { id: 1, size: 1.5, type: "check", value: "21 sep 2021" },
    { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
    { id: 1, size: 1.5, type: "action", value: "" },
    { id: 1, size: 1, type: "text", value: "HUR735" },
    { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
    { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
    { id: 1, size: 1.5, type: "check", alue: "21 sep 2021" },
    { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
    { id: 1, size: 1.5, type: "action", value: "" },
    { id: 1, size: 1, type: "text", value: "HUR735" },
    { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
    { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
    { id: 1, size: 1.5, type: "check", value: "21 sep 2021" },
    { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
    { id: 1, size: 1.5, type: "action", value: "" }
  ]
  let mockdataDish = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletionHistoryComponentComponent],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('open the completion history', () => {
    it('should render ngOnInit', () => {
      const spy = spyOn(component as any, 'createColoumns');
      component.ngOnInit();
      expect(spy).toHaveBeenCalledWith();
    })
  })

  describe('iform table structure', () => {
    it('should form table', () => {
      const mockdata = {
        columns: [
          { apiKey: "contentid", color: "", display: "ContentID", isSelected: true, label: "ContentID", overrideWidth: "150", size: 1, sort: "" },
          { apiKey: "title", color: "", display: "Title", isSelected: true, label: "Title", overrideWidth: "250", size: 5, sort: "" },
          { apiKey: "time", color: "", display: "Time Spent", isSelected: true, label: "Time Spent", overrideWidth: "150", size: 1.5, sort: "" },
          { apiKey: "date", color: "", display: "Due Date", isSelected: true, label: "Due Date", overrideWidth: "150", size: 1.5, sort: "" },
          { apiKey: "compdate", color: "", display: "Completion Date", isSelected: true, label: "Completion Date", overrideWidth: "150", size: 1.5, sort: "" },
          { apiKey: "action", color: "", display: "Actions", isSelected: true, label: "Actions", overrideWidth: "200", size: 1.5, sort: "", type: "text" }
        ],
        rows: [
          { id: 1, size: 1, type: "text", value: "HUR735" },
          { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
          { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
          { id: 1, size: 1.5, type: "check", alue: "21 sep 2021" },
          { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
          { id: 1, size: 1.5, type: "action", value: "" },
          { id: 1, size: 1, type: "text", value: "HUR735" },
          { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
          { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
          { id: 1, size: 1.5, type: "check", value: "21 sep 2021" },
          { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
          { id: 1, size: 1.5, type: "action", value: "" },
          { id: 1, size: 1, type: "text", value: "HUR735" },
          { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
          { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
          { id: 1, size: 1.5, type: "check", alue: "21 sep 2021" },
          { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
          { id: 1, size: 1.5, type: "action", value: "" },
          { id: 1, size: 1, type: "text", value: "HUR735" },
          { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
          { id: 1, size: 1.5, type: "dropdown", value: "20 mins" },
          { id: 1, size: 1.5, type: "check", value: "21 sep 2021" },
          { id: 1, size: 1.5, type: "toggle", value: "10 oct 2021" },
          { id: 1, size: 1.5, type: "action", value: "" }
        ]
      }

      component.title = "Training Taken (12)";
      component.iFormTableStructure(mockdata);
      expect(component.title).toEqual("Training Taken (12)")
    })
  })

  describe('create columns for training taken', () => {
    it('should form the header of the table', () => {
      const mockdata: any = [
        { apiKey: "contentid", color: "", display: "ContentID", isSelected: true, label: "ContentID", overrideWidth: "150", size: 1, sort: "" },
        { apiKey: "title", color: "", display: "Title", isSelected: true, label: "Title", overrideWidth: "250", size: 5, sort: "" },
        { apiKey: "time", color: "", display: "Time Spent", isSelected: true, label: "Time Spent", overrideWidth: "150", size: 1.5, sort: "" },
        { apiKey: "date", color: "", display: "Due Date", isSelected: true, label: "Due Date", overrideWidth: "150", size: 1.5, sort: "" },
        { apiKey: "compdate", color: "", display: "Completion Date", isSelected: true, label: "Completion Date", overrideWidth: "150", size: 1.5, sort: "" },
        { apiKey: "action", color: "", display: "Actions", isSelected: true, label: "Actions", overrideWidth: "200", size: 1.5, sort: "", type: "text" }
      ];
      component.gridColoumns = [
        { apiKey: "contentid", color: "", display: "ContentID", isSelected: true, label: "ContentID", overrideWidth: "150", size: 1, sort: "" },
        { apiKey: "title", color: "", display: "Title", isSelected: true, label: "Title", overrideWidth: "250", size: 5, sort: "" },
        { apiKey: "time", color: "", display: "Time Spent", isSelected: true, label: "Time Spent", overrideWidth: "150", size: 1.5, sort: "" },
        { apiKey: "date", color: "", display: "Due Date", isSelected: true, label: "Due Date", overrideWidth: "150", size: 1.5, sort: "" },
        { apiKey: "compdate", color: "", display: "Completion Date", isSelected: true, label: "Completion Date", overrideWidth: "150", size: 1.5, sort: "" },
        { apiKey: "action", color: "", display: "Actions", isSelected: true, label: "Actions", overrideWidth: "200", size: 1.5, sort: "", type: "text" },
      ]
      component.createColoumns();

      expect(component.gridColoumns).toEqual(mockdata)
    })
  })

  describe('createRows for training taken table', () => {
    const col = [
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
      }
    ]

    const list = [
      {
        id: 1,
        contentid: 'HUR735',
        title: 'Conflict of Intrest',
        time: '20 mins',
        date: '21 sep 2021',
        compdate: '10 oct 2021',
        action: ''
      }
    ]
    it('should make row for training taken', () => {
      const listData = [];
      component.iCreaterows(col, list);
      expect(component.iCreaterows(col, list)).toBeTruthy();
    })
  });

  describe('create columns to dishclosures', () => {
    it('should make header for dishclosures', () => {
      const mockData = [
        {
          apiKey: "contentid",
          color: "",
          display: "ContentID",
          isSelected: true,
          label: "ContentID",
          overrideWidth: "150",
          size: 1,
          sort: ""
        }
      ]

      component.gridDisclosures = [
        {
          apiKey: "contentid",
          color: "",
          display: "ContentID",
          isSelected: true,
          label: "ContentID",
          overrideWidth: "150",
          size: 1,
          sort: ""
        }
      ]
      component.createColumnsDish();

      expect(component.gridDisclosures).toBeTruthy();
    })
  })

  describe('To form the row for disclosures', () => {
    const col = [
      { apiKey: "review", color: "", display: "Review Status", isSelected: true, label: "Review Status", overrideWidth: "150", size: 1.5, sort: "", type: "reviewstatus" },
      {
        apiKey: "contentid", color: "", display: "ContentID", isSelected: true, label: "ContentID", overrideWidth: "150", size: 1, sort: "", type: "contenid"
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
    ]

    const list = [
      {
        display: "Review Status",
        apiKey: "review",
        type: "reviewstatus",
        overrideWidth: "150",
        size: 1.5
      }
    ]
    it('should make rows', () => {
      component.iCreateRowForDish(col, list);
      expect(component.iCreateRowForDish(col, list)).toBeTruthy();
    })
    it('should make row not parent', () => {
      const mockData: any = [];
      component.iCreateRowForDish(col, mockData);
      expect(component.iCreateRowForDish(col, list)).toBeTruthy();
    })
  })

  describe('form table for disclosures', () => {
    it('should make table for disclosures', () => {
      // spyOn(component as any, 'iCreateRowForDish')
      component.gridDisclosures = {
        columns: [
          { apiKey: "contentid", color: "", display: "ContentID", isSelected: true, label: "ContentID", overrideWidth: "150", size: 1, sort: "" },
          { apiKey: "title", color: "", display: "Title", isSelected: true, label: "Title", overrideWidth: "250", size: 5, sort: "" },
          { apiKey: "time", color: "", display: "Time Spent", isSelected: true, label: "Time Spent", overrideWidth: "150", size: 1.5, sort: "" },
          { apiKey: "date", color: "", display: "Due Date", isSelected: true, label: "Due Date", overrideWidth: "150", size: 1.5, sort: "" },
          { apiKey: "compdate", color: "", display: "Completion Date", isSelected: true, label: "Completion Date", overrideWidth: "150", size: 1.5, sort: "" },
          { apiKey: "action", color: "", display: "Actions", isSelected: true, label: "Actions", overrideWidth: "200", size: 1.5, sort: "", type: "text" }
        ],
        rows: [
          { id: 1, size: 1, type: "text", value: "HUR735" },
          { id: 1, size: 5, type: "label", value: "Conflict of Intrest" },
          { id: 1, size: 1.5, type: "dropdown", value: "20 mins" }]
      }
      // const len = Object.keys(component.gridDisclosures.rows).length

      component.dish = `Disclosures Submitted (3)`;
      component.iFormTableForDish(mockdataDish);
      expect(component.dish).toEqual("Disclosures Submitted (3)");
    })
  })

  describe('pageChange', () => {
    it('should call page change function', () => {
      const params = {
        limit: 1,
        skip: 1
      }
      component.payload = {
        limit: 1,
        skip: 1,
        sortOrder:''
      }
      component.pageChange(2);
      expect(component.payload).toBeTruthy();
    })
  })

  describe('should call input value for search',() => {
    it('should search table datas',() => {
      const mockValue="con"
      component.onSearchChange(event);
      expect(mockValue).toEqual('con')
    })
  })

  describe('should call input values empty',()=>{
    it('should clear input values',() => {
      const clearData = "";
      component.cancel();
      expect(clearData).toEqual("")
    })
  })

  describe('sorting data', () => {
    it('should sort data in the table', () => {
      const params = {
        skip:'',
        limit:'',
        sortOrder:'asc'
      }

      const event = {
        apiKey: "contentid",
        color: "",
        display: "ContentID",
        isSelected: true,
        label: "ContentID",
        overrideWidth: "150",
        size: 1,
        sort: "asc"
      }
      component.sortingTable(event);

      expect(event.sort).toEqual('asc');
      expect(event.sort).toEqual('asc');
      expect(event.sort).toEqual('asc');
    })
  })

});
