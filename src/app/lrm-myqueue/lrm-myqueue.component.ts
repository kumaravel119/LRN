import { Component, OnInit } from '@angular/core';
// import { AppCommonModalComponent } from '../app-common-modal/app-common-modal.component';
// import { ModalServiceLrnService } from '../modal-service-lrn.service';

@Component({
  selector: 'app-lrm-myqueue',
  templateUrl: './lrm-myqueue.component.html',
  styleUrls: ['./lrm-myqueue.component.scss']
})
export class LrmMyqueueComponent implements OnInit {

  list = [
    {
      id:1,
      name:"Past Due",
      key:"Past Due"
    },
    {
      id:2,
      name:"Not Started",
      key:"Not Started"
    },
    {
      id:3,
      name:"In Progress",
      key:"In Progress"
    },
    {
      id:4,
      name:"Completed",
      key:"Completed"
    },
    {
      id:5,
      // name:"Total Mandatory",
      key:"Total Mandatory"
    },
    {
      id:6,
      // name:"Not Completed",
      key:"Not Completed"
    }
  ]
  
  status = [
    {
      id:1,
      name:"Pass Due",
      value:"2",
    },
    {
      id:2,
      name:"Not Started",
      value:"3",
    },
    {
      id:3,
      name:"In Progress",
      value:"1" ,
    },
    {
      id:4,
      name:"Completed",
      value:"1",
    }
  ]

  item:any;

  constructor() { }

  ngOnInit(): void {
    this.item = this.list.map((name) =>{
      let key = name.key
      return key
    })
  }

  // openModalPopup(event:any){
  //   this.modalServiceLrn.createPopup({
  //     backdropDismiss:true,
  //     componentProps:{
  //       header:"Disclosures summary point data",
  //       data:this.item,
  //       Component:AppCommonModalComponent
  //     }
  //   })
  // }
}
