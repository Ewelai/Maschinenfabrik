import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchFromComponent } from './search-from.component';

describe('SearchFromComponent', () => {
  let component: SearchFromComponent;
  let fixture: ComponentFixture<SearchFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ SearchFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFromComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('field serach validity', () => {
    const search = component.searchForm.controls.search;

    expect(search.valid).toBeFalsy();
    expect(search.errors.required).toBeTruthy();
  });

  it('set value to field search', () => {
    const search = component.searchForm.controls.search;

    search.setValue('web-app');
    expect(search.valid).toBeTruthy();
  });

  it('call submit method', () => {
    spyOn(component, 'submit').and.callThrough();
    component.submit();

    expect(component.submit).toHaveBeenCalled();
  });

  it('call submit method for emit data', () => {
    spyOn(component.passKey, 'emit');

    const search = component.searchForm.controls.search;
    search.setValue('web-app');

    component.submit();

    expect(component.passKey.emit).toHaveBeenCalledWith('web-app');
  });

});
