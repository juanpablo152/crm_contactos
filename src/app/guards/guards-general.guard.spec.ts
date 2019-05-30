import { TestBed, async, inject } from '@angular/core/testing';

import { GuardsGeneralGuard } from './guards-general.guard';

describe('GuardsGeneralGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsGeneralGuard]
    });
  });

  it('should ...', inject([GuardsGeneralGuard], (guard: GuardsGeneralGuard) => {
    expect(guard).toBeTruthy();
  }));
});
