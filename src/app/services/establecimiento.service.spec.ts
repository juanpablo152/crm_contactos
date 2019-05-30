import { TestBed, inject } from '@angular/core/testing';

import { EstablecimientoService } from './establecimiento.service';

describe('EstablecimientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstablecimientoService]
    });
  });

  it('should be created', inject([EstablecimientoService], (service: EstablecimientoService) => {
    expect(service).toBeTruthy();
  }));
});
