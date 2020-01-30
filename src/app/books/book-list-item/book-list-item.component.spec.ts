import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookListItemComponent} from './book-list-item.component';
import {IsbnPipe} from '../shared/isbn.pipe';
import {Book} from '../../shared/book';

describe('BookListItemComponent', () => {
  let component: BookListItemComponent;
  let fixture: ComponentFixture<BookListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListItemComponent,
        IsbnPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListItemComponent);
    component = fixture.componentInstance;
    component.book = {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      thumbnails: [],
      published: new Date()
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
