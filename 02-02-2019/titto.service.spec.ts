import { TestBed } from '@angular/core/testing';

import { TittoService } from './titto.service';

describe('TittoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TittoService = TestBed.get(TittoService);
    expect(service).toBeTruthy();
  });
});
