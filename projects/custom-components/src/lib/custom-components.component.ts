import { Component, OnInit, EventEmitter, ViewChild, Input } from '@angular/core';
import { FormioEvent } from 'angular-formio';
import { CustomComponentsService } from './custom-components.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'tm-custom-components',
  template: `
  <label for="typeahead-focus">Select favourite colour:</label>
  <input
    id="typeahead-focus"
    type="text"
    class="form-control"
    [(ngModel)]="value"
    [ngbTypeahead]="search"
    (focus)="focus$.next($any($event).target.value)"
    (click)="click$.next($any($event).target.value)"
    (keyup)="searchItems()"
    [resultFormatter]="formatter"
    [inputFormatter]="formatter"
    #instance="ngbTypeahead"
  />
  `,
  styles: [
  ],
})
export class CustomComponentsComponent implements OnInit {
  @Input() url: string;
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  disabled: boolean;
  value: string;
  valueChange: EventEmitter<string>;
  formioEvent?: EventEmitter<FormioEvent>;

  values: { label: string, value: string }[] = [];
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  constructor(private dataService: CustomComponentsService) {

  }

  ngOnInit(): void {
    console.log({customOptions: this.url});

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
}
