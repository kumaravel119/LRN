import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentDropdownComponent } from './different-dropdown.component';

describe('DifferentDropdownComponent', () => {
  let component: DifferentDropdownComponent;
  let fixture: ComponentFixture<DifferentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
