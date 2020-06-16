import { SearchService } from '../services/search/search.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface HandleErrorMethod extends Omit<SearchService, 'handleError'> {  //
  handleError(err: HttpErrorResponse): Observable<string>;
}
