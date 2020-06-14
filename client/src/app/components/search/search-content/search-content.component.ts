import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
})
export class SearchContentComponent implements OnInit {
  @Input() value = [];

  constructor() { }

  ngOnInit(): void {
  }

}
