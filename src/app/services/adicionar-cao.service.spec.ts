import { TestBed } from '@angular/core/testing';

import { AdicionarCaoService } from './adicionar-cao.service';

describe('AdicionarCaoService', () => {
  let service: AdicionarCaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarCaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
