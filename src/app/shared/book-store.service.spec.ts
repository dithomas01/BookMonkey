import {TestBed, inject} from '@angular/core/testing';

import {BookStoreService} from './book-store.service';
import {Book} from './book';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BookRaw} from './book-raw';

describe('BookStoreService', () => {
  const bookRaw: BookRaw[] = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: '2019-01-01T00:00:00.000Z'
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: '2019-01-01T00:00:00.000Z'
    }
  ];

  let httpMock: HttpTestingController;
  let service: BookStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookStoreService]
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(BookStoreService);
  });

  it('should GET a list of all books', () => {
    let receivedBooks: Book[];
    service.getAll().subscribe(b => receivedBooks = b);

    const req = httpMock.expectOne('https://api3.angular-buch.com/secure/books');
    expect(req.request.method).toEqual('GET');

    req.flush(bookRaw);

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');

    expect(receivedBooks[0].published).toEqual(new Date('2019-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    httpMock.verify();
  });
});
