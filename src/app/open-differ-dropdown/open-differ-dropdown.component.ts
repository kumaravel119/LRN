import { Component, OnInit } from '@angular/core';
import { DifferentDropdownComponent } from '../different-dropdown/different-dropdown.component';
import { ModalService } from '../modal-service.service';

@Component({
  selector: 'app-open-differ-dropdown',
  templateUrl: './open-differ-dropdown.component.html',
  styleUrls: ['./open-differ-dropdown.component.scss']
})
export class OpenDifferDropdownComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  openPopup(){
    this.modalService.createPopup({
      componentProps:{
        header:'Different Dropdown',
        Component:DifferentDropdownComponent
      }
    })
  }
}
