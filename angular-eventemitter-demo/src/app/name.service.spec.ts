/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NameService } from './name.service';

describe('Service: Name', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameService]
    });
  });

  it('should emit changes to the name', inject([NameService], (service: NameService) => {
    service.dispatch.subscribe(test => {
      expect(test).toEqual('Jonny');
    })
    service.name = 'Jonny';
  }));
});
