import { TestBed } from '@angular/core/testing';

import { SgeneradorNumerosService } from './sgenerador-numeros.service';

describe('SgeneradorNumerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SgeneradorNumerosService = TestBed.get(SgeneradorNumerosService);
    expect(service).toBeTruthy();
  });
});
