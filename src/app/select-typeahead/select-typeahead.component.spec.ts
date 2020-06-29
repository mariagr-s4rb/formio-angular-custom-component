import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTypeaheadComponent } from './select-typeahead.component';

describe('SelectTypeaheadComponent', () => {
  let component: SelectTypeaheadComponent;
  let fixture: ComponentFixture<SelectTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
