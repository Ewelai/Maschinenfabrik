import { environment } from './../../../../environments/environment.prod';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { MockDataForService } from '../../../components/search/search.config.spec';


describe('SearchService', () => {
  let injector: TestBed;
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    injector = getTestBed();
    service = TestBed.inject(SearchService);
    httpMock = injector.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getValue() should return value', () => {
    service.getValue('servlet-name').subscribe((res) => {
      expect(res).toEqual(MockDataForService);
    });

    const req = httpMock.expectOne(`${environment.mockURL}/api/search?key=servlet-name`);
    expect(req.request.method).toBe('GET');
    req.flush(MockDataForService);
  });
});
