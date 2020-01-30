import {TestBed, inject} from '@angular/core/testing';

import {BookStoreService} from './book-store.service';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';

describe('BookStoreService', () => {
  const expecteBooks = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: new Date()
    }
  ];

  let httpStub;

  beforeEach(() => {

    httpStub = {
      get: () => of(expecteBooks)
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        },
        BookStoreService
      ]
    });
  });

  it('should GET a list of all books', inject([BookStoreService], (service: BookStoreService) => {
    let receivedBooks: Book[];
    service.getAll().subscribe(b => receivedBooks = b);

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');
  }));
});
