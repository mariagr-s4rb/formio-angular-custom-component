import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormioModule } from 'angular-formio';
import { AppComponent } from './app.component';
import { RatingWrapperComponent } from './rating-wrapper/rating-wrapper.component';
import { registerRatingComponent } from './rating-wrapper/rating-wrapper.formio';
import { SelectTypeaheadComponent } from './select-typeahead/select-typeahead.component';
import { registerSelectComponent } from './select-typeahead/select-typeahead.formio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RatingWrapperComponent,
    SelectTypeaheadComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    FormioModule
  ],
  providers: [HttpClient ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [RatingWrapperComponent, SelectTypeaheadComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRatingComponent(injector);
    registerSelectComponent(injector);
  }
}
