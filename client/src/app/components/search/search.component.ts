import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value: Array<string>;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onGetValue(key: string): void {
    this.searchService.getValue(key).subscribe((value: Array<any>) => {
      this.value = value;
    }, (err) => {
      this.value = err.error.text;
    });
  }

}
