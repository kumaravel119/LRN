import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrnDisclosuresComponent } from './lrn-disclosures.component';

describe('LrnDisclosuresComponent', () => {
  let component: LrnDisclosuresComponent;
  let fixture: ComponentFixture<LrnDisclosuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrnDisclosuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrnDisclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
