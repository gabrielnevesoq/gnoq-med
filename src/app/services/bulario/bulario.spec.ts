import { TestBed } from '@angular/core/testing';

import { Bulario } from './bulario';

describe('Bulario', () => {
  let service: Bulario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bulario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
