import { TestBed, inject } from '@angular/core/testing';

import { JsonWebTokenService } from './json-web-token.service';

describe('JsonWebTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonWebTokenService]
    });
  });

  it('should be created', inject([JsonWebTokenService], (service: JsonWebTokenService) => {
    expect(service).toBeTruthy();
  }));
});
