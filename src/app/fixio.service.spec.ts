import { TestBed, inject } from '@angular/core/testing';

import { FixioService } from './fixio.service';

describe('FixioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixioService]
    });
  });

  it('should be created', inject([FixioService], (service: FixioService) => {
    expect(service).toBeTruthy();
  }));
});
