import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableViewComponent } from './app-table-view.component';

describe('AppTableViewComponent', () => {
  let component: AppTableViewComponent;
  let fixture: ComponentFixture<AppTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
