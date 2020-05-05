import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultitemComponent } from './searchresultitem.component';

describe('SearchresultitemComponent', () => {
  let component: SearchresultitemComponent;
  let fixture: ComponentFixture<SearchresultitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
