import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './admin/home/home.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {CreateBookComponent} from './admin/create-book/create-book.component';
import {EditBookComponent} from './admin/edit-book/edit-book.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
