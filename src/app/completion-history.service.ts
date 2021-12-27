import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletionHistoryService {

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

  data:any;
  constructor(public httpClient:HttpClient) { 
    this.getDataMendatoryTraining(this.data).subscribe(data => {
      this.data = data
      console.log(this.data);
    }) 
    // this.getDataMendatoryTraining();
  }

  getDataMendatoryTraining(data:any):Observable<any>{
   return this.httpClient.get('../assets/images/mandatory.json')
  //  .subscribe(
  //     data => {
  //       this.data = data 
  //       console.log(this.data)
  //     },
  //     (err:HttpErrorResponse) => {
  //       console.log(err.message);
    //   }
    // )
    // console.log(this.data);
  }
}
