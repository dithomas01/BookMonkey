import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookFormComponent} from './book-form.component';
import {AbstractControl, ReactiveFormsModule} from '@angular/forms';
import {Component, Input} from '@angular/core';
import {BookExistsValidatorService} from '../shared/book-exists-validator.service';

@Component({template: '', selector: 'bm-form-messages'})
class TestFormMessagesComponent {
  @Input() control: AbstractControl;
  @Input() controlName: string;
}

@Component({template: ''})
class MockExistsValidatorComponent {

}

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookFormComponent,
        TestFormMessagesComponent,
        MockExistsValidatorComponent
      ],
      providers: [
        {
          provide: BookExistsValidatorService,
          useValue: MockExistsValidatorComponent
        }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
