import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './search/search.component';
import {TokenInterceptor} from './shared/token-interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {BookFormComponent} from './book-form/book-form.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {FormMessagesComponent} from './form-messages/form-messages.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { IsbnPipe } from './shared/isbn.pipe';

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
    IsbnPipe
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
