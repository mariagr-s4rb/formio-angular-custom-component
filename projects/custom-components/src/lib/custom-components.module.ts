import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomComponentsComponent } from './custom-components.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormioModule } from 'angular-formio';
import { registerSelectComponent } from './custom-components.formio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomComponentsComponent],
  imports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    FormioModule
  ],
  providers: [ HttpClient ],
  exports: [CustomComponentsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CustomComponentsModule { 
  constructor(injector: Injector) {
      registerSelectComponent(injector);
  }
}
