import { Component, OnInit, EventEmitter, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Formio, Components, FormioCustomComponent, FormioEvent } from 'angular-formio';
import { DummyDataService } from '../core/services/dummy-data.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

//const SelectComponent = Components.components.select;
@Component({
  selector: 'app-select-typeahead',
  templateUrl: './select-typeahead.component.html',
  styleUrls: ['./select-typeahead.component.scss']
})
export class SelectTypeaheadComponent /* extends SelectComponent */ implements FormioCustomComponent<string>, OnInit {
  @Input() url: string;
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  disabled: boolean;
  value: string;
  valueChange: EventEmitter<string>;
  formioEvent?: EventEmitter<FormioEvent>;

  values: { label: string, value: string }[] = [];
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  constructor(private dataService: DummyDataService) {

  }

  ngOnInit(): void {
    console.log({customOptions: this.url});
   // this.getValues();
  }
 
  formatter = (result: { label: string, value: string}) => result.value;
  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.values
        : this.values.filter(v => v.value.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  searchItems = async () => {
    if( this.value.length % 3 === 0) {
      const response: any = await this.dataService.get(this.url);
      console.log({data: response});
      this.values = response.data;
      console.log(`typeahed updated: ${this.value}`);
    }
  }

  // loadItems(url, search, headers, options, method, body) {
    // Method to overwrite SelectComponent
    // here you would call your Angular Service instead of using Formio.makeRequest.
  // }
}

// (Formio as any).Components.setComponent('select', SelectTypeaheadComponent);