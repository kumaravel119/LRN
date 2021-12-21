import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-app-course',
  templateUrl: './app-course.component.html',
  styleUrls: ['./app-course.component.scss']
})
export class AppCourseComponent implements OnInit {

  supportLanguages:any = [
    {
      id:1,
      language:"English",
      value:true,
      name:"english"
    },
    {
      id:2,
      language:"Spanish",
      value:true,
      name:"spanish"
    },
    {
      id:3,
      language:"Tamil",
      value:true,
      name:"tamil"
    },
    {
      id:4,
      language:"French",
      value:true,
      name:"french"
    }
  ]

  defaultLanguage = "Language";

  selectLanguages:any = "";

  constructor(
    public translateService:TranslateService) { 
    // const browserLang = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang)

    // console.log(this.translateService);
  }

  ngOnInit(){
    this.translateService.addLangs(this.supportLanguages)
    this.translateService.setDefaultLang('tamil');
  }

  uiUpdateDefaultResponse(data:any){
   console.log("success")
   this.selectLanguages = data;
   console.log(this.selectLanguages);
   this.translateService.use(this.selectLanguages);
  //  console.log(set);
  }
  
  /**
   * multi language POC
   */
  // onChange(event:any){
  //  this.selectLanguages = event;
  //  console.log(this.selectLanguages);
   
  // }


  // selectLanguage(event:any){
  //   this.translateService.use(this.selectLanguages);
  // }

  // studentDetail(){
  //   this.modalService.createPopup({
  //     componentProps:{
  //       header:'Student Details',
  //       // data:{ data },
  //       Component: StudentComponent
  //     }
  //   })
  // }

  // staffDetail(){
  //   this.modalService.createPopup({
  //     componentProps:{
  //       header:'Staff Details',
  //       Component: TeacherComponent
  //     }
  //   })
  // }
}
