import { TestBed, inject } from '@angular/core/testing';

import { RegisusuarioService } from './regisusuario.service';

describe('RegisusuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisusuarioService]
    });
  });

  it('should be created', inject([RegisusuarioService], (service: RegisusuarioService) => {
    expect(service).toBeTruthy();
  }));
});
