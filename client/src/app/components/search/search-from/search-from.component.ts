import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-search-from',
  templateUrl: './search-from.component.html',
  styleUrls: ['./search-from.component.scss']
})
export class SearchFromComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.initSearchForm();
  }

  initSearchForm(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }

  submit() {
    const key = this.searchForm.value.search;
    this.searchService.getValue(key);
  }

}
