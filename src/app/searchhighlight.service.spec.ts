import { TestBed } from '@angular/core/testing';

import { SearchhighlightService } from './searchhighlight.service';

describe('SearchhighlightService', () => {
  let service: SearchhighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchhighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
