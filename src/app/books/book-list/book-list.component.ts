import {Component, OnInit} from '@angular/core';
import {Book} from '../../shared/book';
import {BookStoreService} from '../../shared/book-store.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoadBooks} from '../actions/book.actions';
import {State} from '../../reducers';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService, private store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
    this.books$ = this.bs.getAll();
  }

}
