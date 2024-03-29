import {browser, by, element} from 'protractor';

export class BookDetailsPage {
  getHeaderText() {
    return element(by.css('h1')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}

export class BookListPage {
  navigateTo() {
    browser.get('/books');
    return this;
  }

  getBookItems() {
    return element.all(by.css('bm-book-list-item'));
  }

  clickOnFirstBook() {
    this.getBookItems().then(console.log);
    this.getBookItems().first().click();
    return new BookDetailsPage();
  }
}
