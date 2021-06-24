import { TestBed } from '@angular/core/testing';

import { FlatServiceService } from './flat-service.service';

describe('FlatServiceService', () => {
  let service: FlatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
