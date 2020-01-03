import {Injectable} from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookRaw} from './book-raw';
import {BookFactory} from './book-factory';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://api3.angular-buch.com';
  books: Book[];

  constructor(private http: HttpClient) {
    // this.books = [
    //   {
    //     isbn: '9783864906466',
    //     title: 'Angular',
    //     authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
    //     published: new Date(2019, 4, 30),
    //     subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx',
    //     rating: 5,
    //     thumbnails: [{
    //       url: 'https://ng-buch.de/buch1.jpg',
    //       title: 'Buchcover'
    //     }],
    //     description: 'Die Autoren führen Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular...'
    //   },
    //   {
    //     isbn: '9783864903274',
    //     title: 'Reacht',
    //     authors: ['Oliver Zeigermann', 'Nils Hartmann'],
    //     published: new Date(2016, 6, 17),
    //     subtitle: 'Die praktische Einführung in React, React router und Redux',
    //     rating: 3,
    //     thumbnails: [{
    //       url: 'https://ng-buch.de/buch2.jpg',
    //       title: 'Buchcover'
    //     }],
    //     description: 'React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen...'
    //   }
    // ];
  }

  getAll(): Observable<Book[]> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books`)
      .pipe(map(booksRaw => booksRaw.map(b => BookFactory.fromRaw(b)),
        )
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<BookRaw>(`${this.api}/book/${isbn}`)
      .pipe(map(b => BookFactory.fromRaw(b)));
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`, {responseType: 'text'});
  }
}
