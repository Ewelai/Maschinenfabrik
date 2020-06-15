import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-from',
  templateUrl: './search-from.component.html',
  styleUrls: ['./search-from.component.scss']
})
export class SearchFromComponent implements OnInit {
  @Input() public isDisabled: boolean;
  @Output() public passKey: EventEmitter<string> = new EventEmitter<string>();
  public searchForm: FormGroup;

  public ngOnInit(): void {
    this.initSearchForm();
  }

  private initSearchForm(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }

  public submit(): void {
    const key = this.searchForm.get('search').value;
    this.passKey.emit(key);
  }

}
