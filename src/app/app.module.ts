import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDropdownComponent } from './app-dropdown/app-dropdown.component';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core' 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppCourseComponent } from './app-course/app-course.component';
import { AppTableViewComponent } from './app-table-view/app-table-view.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DndDirective } from './dnd.directive';
import { AppProgressComponent } from './app-progress/app-progress.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { AppLrnCategoryComponent } from './app-lrn-category/app-lrn-category.component';
import { LrnDisclosuresComponent } from './lrn-disclosures/lrn-disclosures.component';
import { LrmMyqueueComponent } from './lrm-myqueue/lrm-myqueue.component';
import { AppModalPopupComponent } from './app-modal-popup/app-modal-popup.component';
import { OpenModalPopupComponent } from './open-modal-popup/open-modal-popup.component';
import { ViewModalPopupComponent } from './view-modal-popup/view-modal-popup.component';
import { FormsModule } from '@angular/forms';
import { DifferentDropdownComponent } from './different-dropdown/different-dropdown.component';
import { OpenDifferDropdownComponent } from './open-differ-dropdown/open-differ-dropdown.component';
import { CompletionHistoryComponentComponent } from './completion-history-component/completion-history-component.component';
import { AppPaginationComponent } from './app-pagination/app-pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchDirective } from './search.directive';
import { AppfilterPipe } from './appfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppDropdownComponent,
    AppCourseComponent,
    AppTableViewComponent,
    DragAndDropComponent,
    DndDirective,
    AppProgressComponent,
    StatusBarComponent,
    AppLrnCategoryComponent,
    LrnDisclosuresComponent,
    LrmMyqueueComponent,
    AppModalPopupComponent,
    OpenModalPopupComponent,
    ViewModalPopupComponent,
    DifferentDropdownComponent,
    OpenDifferDropdownComponent,
    CompletionHistoryComponentComponent,
    AppPaginationComponent,
    SearchDirective,
    AppfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule,
    FormsModule,
    NgxPaginationModule,
    TranslateModule.forRoot(
      {
        loader : {
          provide: TranslateLoader,
          useFactory: (http:HttpClient) => { return new TranslateHttpLoader(http, './assets/i18n/', '.json');},
          deps: [HttpClient]
        }
      }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
