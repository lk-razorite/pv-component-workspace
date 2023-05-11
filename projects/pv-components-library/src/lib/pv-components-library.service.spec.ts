import { TestBed } from '@angular/core/testing';

import { PvComponentsLibraryService } from './pv-components-library.service';

describe('PvComponentsLibraryService', () => {
  let service: PvComponentsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvComponentsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
