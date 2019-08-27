import { TestBed } from '@angular/core/testing';

import { APIRequestLocService } from './apirequest-loc.service';

describe('APIRequestLocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIRequestLocService = TestBed.get(APIRequestLocService);
    expect(service).toBeTruthy();
  });
});
