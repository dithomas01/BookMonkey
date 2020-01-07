import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './admin/home/home.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'books',
        loadChildren: './books/books.module#BooksModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
