import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal-service.service';
import { ViewModalPopupComponent } from '../view-modal-popup/view-modal-popup.component';

@Component({
  selector: 'app-open-modal-popup',
  templateUrl: './open-modal-popup.component.html',
  styleUrls: ['./open-modal-popup.component.scss']
})
export class OpenModalPopupComponent implements OnInit {

  
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openPopup() {
    this.modalService.createPopup({
      backdropDismiss:true,
      cssClass: 'popup-modal-css',
      componentProps: {
        header: "Set Disclosures Label and Data Points",
        Component: ViewModalPopupComponent
      }
    })
  }

  changedValue(eve:any){
    console.log(eve);
  }

}
