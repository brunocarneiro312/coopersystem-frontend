import { TestBed } from '@angular/core/testing';

import { Cep.ServiceService } from './cep.service.service';

describe('Cep.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cep.ServiceService = TestBed.get(Cep.ServiceService);
    expect(service).toBeTruthy();
  });
});
