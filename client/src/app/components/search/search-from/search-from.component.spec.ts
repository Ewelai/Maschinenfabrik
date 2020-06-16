import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchFromComponent } from './search-from.component';
import { InitSearchFormMethod } from 'src/app/core/interfaces/init-search-form-method';

describe('SearchFromComponent', () => {
  let component: InitSearchFormMethod;
  let fixture: ComponentFixture<InitSearchFormMethod>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ SearchFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFromComponent) as unknown as ComponentFixture<InitSearchFormMethod>;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('field serach validity', () => {
    fixture.detectChanges();
    const search = component.searchForm.controls.search;

    expect(search.valid).toBeFalsy();
    expect(search.errors.required).toBeTruthy();
  });

  it('set value to field search', () => {
    fixture.detectChanges();
    const search = component.searchForm.controls.search;

    search.setValue('web-app');
    expect(search.valid).toBeTruthy();
  });

  it('call submit method', () => {
    fixture.detectChanges();
    spyOn(component, 'submit').and.callThrough();
    component.submit();

    expect(component.submit).toHaveBeenCalled();
  });

  it('call submit method for emit data', () => {
    fixture.detectChanges();
    spyOn(component.passKey, 'emit');

    const search = component.searchForm.controls.search;
    search.setValue('web-app');

    component.submit();

    expect(component.passKey.emit).toHaveBeenCalledWith('web-app');
  });

  it('should init search form method', () => {
    expect(component.searchForm).toBeFalsy();
    fixture.detectChanges();
    spyOn(component, 'initSearchForm').and.callThrough();

    component.initSearchForm();

    expect(component.initSearchForm).toHaveBeenCalled();
  });

  it('should init search form builder', () => {
    expect(component.searchForm).toBeFalsy();
    component.initSearchForm();

    expect(component.searchForm).toBeTruthy();
  });

});
