import { TestBed } from '@angular/core/testing';

import { AutocompleteserviceService } from './autocompleteservice.service';

describe('AutocompleteserviceService', () => {
  let service: AutocompleteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
