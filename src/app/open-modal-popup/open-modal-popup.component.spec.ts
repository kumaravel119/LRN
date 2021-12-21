import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenModalPopupComponent } from './open-modal-popup.component';

describe('OpenModalPopupComponent', () => {
  let component: OpenModalPopupComponent;
  let fixture: ComponentFixture<OpenModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenModalPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
