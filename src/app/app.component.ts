import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { ModalServiceLrnService } from './modal-service-lrn.service';
// import { StudentComponent } from './student/student.component';
// import { TeacherComponent } from './teacher/teacher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  courseName = "Information Security: An Overview"

  courseDescription = "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach."
  title = 'app';

  defaultLanguage = "Language";

  text="";

  time = "~45 Mins";

  due ="Past due 23 Sep 2021"

  selectLanguages='en';

  supportLanguages:any = [
    {
      id:1,
      language:"English",
      value:true
    },
    {
      id:2,
      language:"Spanish",
      value:true
    },
    {
      id:3,
      language:"Tamil",
      value:true
    },
    {
      id:4,
      language:"French",
      value:true
    }
  ]

  defaultResponseValue = "Language";

  constructor() { }
  
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

