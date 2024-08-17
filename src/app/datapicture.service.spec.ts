import { TestBed } from '@angular/core/testing';

import { DatapictureService } from './datapicture.service';

describe('DatapictureService', () => {
  let service: DatapictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
