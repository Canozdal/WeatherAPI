import { TestBed } from '@angular/core/testing';

import { APIRequestWebService } from './apirequest-web.service';

describe('APIRequestWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIRequestWebService = TestBed.get(APIRequestWebService);
    expect(service).toBeTruthy();
  });
});
