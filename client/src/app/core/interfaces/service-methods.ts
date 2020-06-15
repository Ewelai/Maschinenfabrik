import { SearchService } from '../services/search/search.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface ServiceMethods extends Omit<SearchService, 'handleError'> {
  handleError(err: HttpErrorResponse): Observable<string>;
}
