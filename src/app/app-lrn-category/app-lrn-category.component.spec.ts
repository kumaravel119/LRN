import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLrnCategoryComponent } from './app-lrn-category.component';

describe('AppLrnCategoryComponent', () => {
  let component: AppLrnCategoryComponent;
  let fixture: ComponentFixture<AppLrnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLrnCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLrnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
