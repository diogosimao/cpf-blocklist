import { TestBed, inject } from '@angular/core/testing';

import { CpfService } from './cpf.service';

describe('CpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpfService]
    });
  });

  it('should be created', inject([CpfService], (service: CpfService) => {
    expect(service).toBeTruthy();
  }));
});
