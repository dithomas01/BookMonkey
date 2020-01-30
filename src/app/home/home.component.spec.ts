import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {Component} from '@angular/core';
import {SearchComponent} from '../search/search.component';
import {RouterTestingModule} from '@angular/router/testing';

@Component({template: ''})
class TestBookComponent {
}

@Component({template: '', selector: 'bm-search'})
class TestSearchComponent {
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        TestSearchComponent,
        TestBookComponent
      ],
      providers: [
        {
          provide: SearchComponent,
          useValue: TestSearchComponent
        }
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: '../books', component: TestBookComponent}
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
