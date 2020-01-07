import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookListItemComponent} from './books/book-list-item/book-list-item.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {HomeComponent} from './admin/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './search/search.component';
import {TokenInterceptor} from './shared/token-interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {BookFormComponent} from './admin/book-form/book-form.component';
import {CreateBookComponent} from './admin/create-book/create-book.component';
import {FormMessagesComponent} from './form-messages/form-messages.component';
import {EditBookComponent} from './admin/edit-book/edit-book.component';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { IsbnPipe } from './books/shared/isbn.pipe';
import { ZoomDirective } from './books/shared/zoom.directive';
import { DelayDirective } from './books/shared/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    BookFormComponent,
    CreateBookComponent,
    FormMessagesComponent,
    EditBookComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(localeDe);
  }

}
