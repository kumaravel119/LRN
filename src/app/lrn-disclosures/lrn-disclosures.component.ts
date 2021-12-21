import { Component, Input, OnInit } from '@angular/core';
// import { AppCommonModalComponent } from '../app-common-modal/app-common-modal.component';
// import { ModalServiceLrnService } from '../modal-service-lrn.service';

@Component({
  selector: 'app-lrn-disclosures',
  templateUrl: './lrn-disclosures.component.html',
  styleUrls: ['./lrn-disclosures.component.scss']
})
export class LrnDisclosuresComponent implements OnInit {

  // @Input() data:any;
  list = [
    {
      id:1,
      name:"Disclosures",
      key:"Disclosures",
      value:1
    },
    {
      id:2,
      name:"Pending Completion",
      key:"Pending Completion",
      value:2
    },
    {
      id:3,
      name:"Information Requested",
      key:"Information Requested",
      value:3
    },
    {
      id:4,
      name:"Submitted",
      key:"Submitted",
      value:4
    },
    {
      id:5,
      // name:"Submitted",
      key:"Total Mandatory",
      value:4
    },
    {
      id:4,
      // name:"Submitted",
      key:"Not Completed",
      value:4
    },
    {
      id:4,
      // name:"Submitted",
      key:"Pending Review",
      value:4
    }
  ]

  statusDisclosures = [
    {
      id:1,
      name:"Disclosures",
      value:"14",
      admin:"#"
    },
    {
      id:2,
      name:"Pending Completion",
      value:"2",
      admin:"#"
    },
    {
      id:3,
      name:"Information Request",
      value:"2" ,
      admin:"#"
    },
    {
      id:4,
      name:"Submitted",
      value:"1",
      admin:"#"
    }
  ]

  item: any;
  constructor() { }

  ngOnInit():any {
    // this.item = this.navPrams.get('list')s
    // this.item = this.list.reduce((acc :any,list) => {

    //   acc[list.id] = list.key

    //   console.log(list);
      
    //   return acc;
    // },{})
    console.log(this.item);
    this.item = this.list.map((name) => {
      let key = name.key
      // key = name["name"]
      
      // this.item.push(key)
      return key;
    })
        console.log(this.item);

  }

  // openModalPopup(data:any){
  //   console.log(this.list);
  //   this.modalServiceLrn.createPopup({
  //     backdropDismiss:true,
  //     componentProps:{
  //       header:"Disclosures summary point data",
  //       data: this.item,
  //       Component:AppCommonModalComponent
  //     }
  //   })    
  // }

}
