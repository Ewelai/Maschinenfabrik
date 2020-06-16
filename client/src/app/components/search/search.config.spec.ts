import { SearchService } from 'src/app/core/services/search/search.service';
import { HttpErrorResponse } from '@angular/common/http';

export const dataFromJson = [ 'cofaxEmail', 'cofaxAdmin', 'cofaxTools', 'cofaxCDS', 'fileServlet' ];
export const MockDataResponse = {
  getValue: jasmine.createSpy(),
  handleError: jasmine.createSpy()
};

export const SearchServiceTest = { provide: SearchService, useValue: MockDataResponse };
export const MockDataForService = {value: dataFromJson};
export const err = new HttpErrorResponse({
  error: { text: 'Key isn\'t available'}
});
