import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from './../../../../environments/environment.prod';

import { SearchService } from './search.service';
import { HandleErrorMethod } from '../../interfaces/handle-error-method';
import { MockDataForService, err } from '../../../components/search/search.config.spec';
import { of } from 'rxjs';

describe('SearchService', () => {
  let injector: TestBed;
  let service: HandleErrorMethod;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    injector = getTestBed();
    service = TestBed.inject(SearchService) as unknown as HandleErrorMethod;
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getValue() should return value', () => {
    const url = `${environment.URL}/api/search?key=servlet-name`;

    service.getValue('servlet-name').subscribe(res => {
      expect(res).toEqual(MockDataForService);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(MockDataForService);
  });

  it('handle error in getValue() method', () => {
    const url = `${environment.URL}/api/search?key=error`;

    service.getValue('error').subscribe(res => {
      expect(res).toEqual(err);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(err);
  });

  it('handleError() method should return object with error', () => {
    spyOn(service, 'handleError').and.returnValue(of(err.error.text));
    service.handleError(err);

    expect(service.handleError).toHaveBeenCalledWith(err);
  });
});
