import { ServiceMethods } from './../../interfaces/service-methods';
import { environment } from './../../../../environments/environment.prod';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { MockDataForService, err } from '../../../components/search/search.config.spec';
import { of, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('SearchService', () => {
  let injector: TestBed;
  let service: ServiceMethods;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    injector = getTestBed();
    service = TestBed.inject(SearchService) as unknown as ServiceMethods;
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getValue() should return value', () => {
    const url = `${environment.mockURL}/api/search?key=servlet-name`;

    service.getValue('servlet-name').subscribe(res => {
      expect(res).toEqual(MockDataForService);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(MockDataForService);
  });

  it('handleError() method should return object with error', () => {
    spyOn(service, 'handleError').and.returnValue(of(err.error.text));
    service.handleError(err);

    expect(service.handleError).toHaveBeenCalledWith(err);
  });
});
