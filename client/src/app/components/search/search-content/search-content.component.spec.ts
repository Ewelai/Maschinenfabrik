import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContentComponent } from './search-content.component';

describe('SearchContentComponent', () => {
  let component: SearchContentComponent;
  let fixture: ComponentFixture<SearchContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContentComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called with initial value', () => {
    expect(component.value).toEqual([]);
  });
});
