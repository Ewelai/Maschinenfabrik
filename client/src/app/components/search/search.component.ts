import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public value: Array<string>;
  public isDisabled: boolean;

  constructor(private searchService: SearchService) { }

  public onGetValue(key: string): void {
    this.isDisabled = true;
    this.searchService.getValue(key).subscribe((value: Array<string>) => {
      this.isDisabled = false;
      this.value = value;
    }, error => {
      this.value = error;
      this.isDisabled = false;
    } );
  }

}
