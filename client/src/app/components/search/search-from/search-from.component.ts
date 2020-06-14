import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-from',
  templateUrl: './search-from.component.html',
  styleUrls: ['./search-from.component.scss']
})
export class SearchFromComponent implements OnInit {
  @Output() passKey: EventEmitter<string> = new EventEmitter<string>();
  public searchForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initSearchForm();
  }

  public initSearchForm(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }

  public submit(): void {
    const key = this.searchForm.value.search;
    this.passKey.emit(key);
  }

}
