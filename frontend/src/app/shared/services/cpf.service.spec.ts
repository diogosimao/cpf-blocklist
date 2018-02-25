import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { CpfService } from './cpf.service';

describe('CpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CpfService, ApiService]
    });
  });

  it('should be created', inject([CpfService, ApiService], (service: CpfService) => {
    expect(service).toBeTruthy();
  }));
});
