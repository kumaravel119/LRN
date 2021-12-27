import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppPaginationComponent } from './app-pagination.component';

fdescribe('AppPaginationComponent', () => {
  let component: AppPaginationComponent;
  let fixture: ComponentFixture<AppPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPaginationComponent ],
      imports: [IonicModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('pagechanged emit the value',() => {
    it('should call pagechanged',() =>{
      const spy = spyOn (component.pageChange,'emit');
       component.pageChanged(1);
       expect(spy).toHaveBeenCalledTimes(1);
    } )
  })
});
