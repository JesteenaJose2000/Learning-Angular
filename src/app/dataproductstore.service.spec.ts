import { TestBed } from '@angular/core/testing';

import { DataproductstoreService } from './dataproductstore.service';

describe('DataproductstoreService', () => {
  let service: DataproductstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproductstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
