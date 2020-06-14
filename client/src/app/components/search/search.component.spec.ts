import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './../../core/core.module';
import { SearchComponent } from './search.component';
import { SearchService } from 'src/app/core/services/search/search.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockDataResponse } from './search.config.spec';
import { BrowserModule } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, CoreModule, BrowserModule ],
      providers: [{provide: SearchService, useValue: MockDataResponse}],
      declarations: [ SearchComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data from service', () => {
    spyOn(searchService, 'getValue').and.callThrough();
    component.onGetValue('servlet-name');

    // tslint:disable-next-line: no-console
    console.debug('sfefe', searchService);

    component.onGetValue('servlet-name');
    fixture.detectChanges();

    expect(searchService.getValue).toHaveBeenCalledWith('servlet-name');
    expect(component.value).toEqual([ 'cofaxEmail', 'cofaxAdmin', 'cofaxTools', 'cofaxCDS', 'fileServlet' ]);
  });

  // it('should create mockSearchFormComponent', () => {
  //   expect(mockSearchFormComponent).toBeTruthy();
  // });

  // it('should input key', () => {
  //   mockSearchFormComponent.searchForm.value.search = 'servlet';
  //   fixture.detectChanges();

  //   expect(mockSearchFormComponent.searchForm.value.search).toBe('servlet');
  // });
});
