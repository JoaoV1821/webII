import { TestBed } from '@angular/core/testing';

import { MultService } from './mult.service';

describe('SomaService', () => {
  let service: MultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
