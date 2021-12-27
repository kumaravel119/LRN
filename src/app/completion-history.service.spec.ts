import { TestBed } from '@angular/core/testing';

import { CompletionHistoryService } from './completion-history.service';

describe('CompletionHistoryService', () => {
  let service: CompletionHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletionHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
