import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './admin/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './search/search.component';
import {TokenInterceptor} from './shared/token-interceptor';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {BooksModule} from './books/books.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BooksModule,
        AdminModule
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
