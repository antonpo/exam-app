import { TestBed, inject } from '@angular/core/testing';

import { ListeningService } from './listening.service';

describe('ListeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeningService]
    });
  });

  it('should be created', inject([ListeningService], (service: ListeningService) => {
    expect(service).toBeTruthy();
  }));
});
