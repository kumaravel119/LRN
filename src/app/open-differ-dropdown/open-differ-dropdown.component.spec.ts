import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDifferDropdownComponent } from './open-differ-dropdown.component';

describe('OpenDifferDropdownComponent', () => {
  let component: OpenDifferDropdownComponent;
  let fixture: ComponentFixture<OpenDifferDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDifferDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDifferDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
