import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';

import { CoreModule } from './../../core/core.module';
import { MockSpy } from './../../core/interfaces/mock-spy';
import { SearchComponent } from './search.component';
import { SearchService } from 'src/app/core/services/search/search.service';
import { SearchServiceTest, dataFromJson, err } from './search.config.spec';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: MockSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, CoreModule, BrowserModule ],
      providers: [SearchServiceTest],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchService) as unknown as MockSpy;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data from service', () => {
    searchService.getValue.and.returnValue(of(dataFromJson));
    component.onGetValue('servlet-name');

    expect(searchService.getValue).toHaveBeenCalledWith('servlet-name');
    expect(component.value).toEqual(dataFromJson);
  });

  it('should return error', () => {
    searchService.getValue.and.returnValue(of(err.error.text));
    component.onGetValue('error');

    expect(searchService.getValue).toHaveBeenCalledWith('error');
    expect(component.value).toEqual(err.error.text);
  });
});
