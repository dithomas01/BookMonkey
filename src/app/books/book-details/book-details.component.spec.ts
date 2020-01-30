import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookDetailsComponent} from './book-details.component';
import {IsbnPipe} from '../shared/isbn.pipe';
import {DelayDirective} from '../shared/delay.directive';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';
import {BookStoreService} from '../../shared/book-store.service';
import {of} from 'rxjs';
import any = jasmine.any;
import {Book} from '../../shared/book';

@Component({template: ''})
class TestEditBookComponent {
}

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let book: Book;

  beforeEach(async(() => {
    book = {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    };

    TestBed.configureTestingModule({
      declarations: [
        BookDetailsComponent,
        IsbnPipe,
        DelayDirective,
        TestEditBookComponent
      ],
      providers: [{
        provide: BookStoreService,
        useValue: {
          remove: () => of(any),
          getSingle: () => of(book)
        }
      }],
      imports: [
        RouterTestingModule.withRoutes([
          {path: '../../admin/edit', component: TestEditBookComponent}
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
