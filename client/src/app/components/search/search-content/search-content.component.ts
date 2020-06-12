import { SearchService } from 'src/app/core/services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {

  message: string;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.takeValue();
  }

  takeValue(): void {
    this.searchService.value.subscribe((message: string) => this.message = message);
  }

}
