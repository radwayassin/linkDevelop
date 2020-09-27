import { TestBed } from '@angular/core/testing';

import { PressReleasesService } from './press-releases.service';

describe('PressReleasesService', () => {
  let service: PressReleasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressReleasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
