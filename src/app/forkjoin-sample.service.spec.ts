import { TestBed } from '@angular/core/testing';

import { ForkjoinSampleService } from './forkjoin-sample.service';

describe('ForkjoinSampleService', () => {
  let service: ForkjoinSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkjoinSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
