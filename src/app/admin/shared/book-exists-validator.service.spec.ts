import {TestBed} from '@angular/core/testing';

import {BookExistsValidatorService} from './book-exists-validator.service';
import {of} from 'rxjs';
import {BookStoreService} from '../../shared/book-store.service';

describe('BookExistsValidatorService', () => {
  let bsMock;

  beforeEach(() => {
      bsMock = {
        check: () => of(true)
      };

      TestBed.configureTestingModule({
        providers: [
          {
            provide: BookStoreService,
            useValue: bsMock
          }
        ]
      });
    }
  );

  it('should be created', () => {
    const service: BookExistsValidatorService = TestBed.get(BookExistsValidatorService);
    expect(service).toBeTruthy();
  });
});
