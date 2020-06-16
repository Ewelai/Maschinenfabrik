import { SearchFromComponent } from '../../components/search/search-from/search-from.component';

export interface InitSearchFormMethod extends Omit<SearchFromComponent, 'initSearchForm'> {
  initSearchForm(): void;
}
