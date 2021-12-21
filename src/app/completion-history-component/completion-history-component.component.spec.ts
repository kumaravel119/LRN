import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionHistoryComponentComponent } from './completion-history-component.component';

describe('CompletionHistoryComponentComponent', () => {
  let component: CompletionHistoryComponentComponent;
  let fixture: ComponentFixture<CompletionHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionHistoryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
