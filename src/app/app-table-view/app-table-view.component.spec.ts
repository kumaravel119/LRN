import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { AppTableViewComponent } from './app-table-view.component';

fdescribe('AppTableViewComponent', () => {
  let component: AppTableViewComponent;
  let fixture: ComponentFixture<AppTableViewComponent>;

  let mockData = {
    columns:[
      {
        apiKey: "contentid",
        color: "",
        display: "ContentID",
        isSelected: true,
        label: "ContentID",
        overrideWidth: "150",
        size: 1,
        sort: ""
      },
      {
        apiKey: "title",
        color: "",
        display: "Title",
        isSelected: true,
        label: "Title",
        overrideWidth: "250",
        size: 5,
        sort: ""
      },
      {
        apiKey: "time",
        color: "",
        display: "Time Spent",
        isSelected: true,
        label: "Time Spent",
        overrideWidth: "150",
        size: 1.5,
        sort: ""
      },
      {
        apiKey: "date",
        color: "",
        display: "Due Date",
        isSelected: true,
        label: "Due Date",
        overrideWidth: "150",
        size: 1.5,
        sort: ""
      },
      {
        apiKey: "compdate",
        color: "",
        display: "Completion Date",
        isSelected: true,
        label: "Completion Date",
        overrideWidth: "150",
        size: 1.5,
        sort: ""
      },
      {
        apiKey: "action",
        color: "",
        display: "Actions",
        isSelected: true,
        label: "Actions",
        overrideWidth: "200",
        size: 1.5,
        sort: "",
        type: "text"
      }
    ],
    rows:[
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
      }
    ]
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTableViewComponent ],
      imports:[IonicModule.forRoot(),HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('rendering data from parent',() =>{
    it('should call ngOninit',()=>{
      component.gridData = [{
        columns:[
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
        ],
        rows:[
          {
            id: 1,
            size: 1,
            type: "text",
            value: "HUR735"
          }
        ]
      }
      ]

      component.data=[{
        columns:[
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
        ],
        rows:[
          {
            id: 1,
            size: 1,
            type: "text",
            value: "HUR735"
          }
        ]
      }
      ]
      component.ngOnInit();

      expect(component.gridData).toEqual(component.data);
    })
  })

  describe('to open the joined courses', () => {
    it('should call the joined courses',()=> {
      const mockData=[
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
      ]

      component.spl = [
        {
          id:9,
          content:"DPP008",
          title:"Information Security: An Overview",
          duration:"45 mins",
          language:"Language", 
        },
        {
          id:10,
          content:"DPP008",
          title:"Information Security: An Overview",
          duration:"45 mins",
          language:"Language",
        }
      ]
      component.demo = true;
      component.open();
      expect(component.demo).toEqual(true);
    })
  })

  describe('to collapse the courses', () => {
    it('should call the collapse action',() => {
      component.demo = false;
      component.collapse();
      expect(component.demo).toEqual(false);
    })
  })

  describe('to should add pagination', () => {
    it('should call pagination function', () => {
      const page = 1;
      component.pageChanged(page);
      expect(component.page).toEqual(1);
    })
  })

  describe('sortColumn to sort columns',() => {
    it('should call sorting function()', () => {
      const mockColumn={
        apiKey: "contentid",
        color: "",
        display: "ContentID",
        isSelected: true,
        label: "ContentID",
        overrideWidth: "150",
        size: 1,
        sort: "asc"
      }
      mockData.columns = [
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
      const spy = spyOn(component.iSortColumn,'emit');
      component.gridData = mockData;
      component.sortColumn(mockColumn);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should check sort is false or true', () => {
      // component.gridData.column.sort = false;
      const mockData:any={
      columns:[
        {
          apiKey: "contentid",
          color: "",
          display: "ContentID",
          isSelected: true,
          label: "ContentID",
          overrideWidth: "150",
          size: 1,
          sort: "false"
        },
        {
          apiKey: "title",
          color: "",
          display: "Title",
          isSelected: true,
          label: "Title",
          overrideWidth: "250",
          size: 5,
          sort: ""
        },
        {
          apiKey: "time",
          color: "",
          display: "Time Spent",
          isSelected: true,
          label: "Time Spent",
          overrideWidth: "150",
          size: 1.5,
          sort: ""
        },
        {
          apiKey: "date",
          color: "",
          display: "Due Date",
          isSelected: true,
          label: "Due Date",
          overrideWidth: "150",
          size: 1.5,
          sort: ""
        },
        {
          apiKey: "compdate",
          color: "",
          display: "Completion Date",
          isSelected: true,
          label: "Completion Date",
          overrideWidth: "150",
          size: 1.5,
          sort: ""
        },
        {
          apiKey: "action",
          color: "",
          display: "Actions",
          isSelected: true,
          label: "Actions",
          overrideWidth: "200",
          size: 1.5,
          sort: false,
          type: "text"
        }
      ],
      rows:[
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
        }
      ]
    }
  
      // mockData.columns = [
      //   {
      //     apiKey: "contentid",
      //     color: "",
      //     display: "ContentID",
      //     isSelected: true,
      //     label: "ContentID",
      //     overrideWidth: "150",
      //     size: 1,
      //     sort: "false"
      //   }
      // ]
      const mockSort = {
        sort:false
      }
      const spy = spyOn(component.iSortColumn, 'emit');
      component.gridData = mockData;
      mockData.columns.sort = 'false';      
      mockData.columns.sort = false;
      component.gridData.columns.sort = false;
      component.gridData.columns.sort = 'false';
      component.sortColumn(mockData)
    })
  })
});
