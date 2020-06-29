import { TestBed } from '@angular/core/testing';

import { AngularFormioCustomSelectDemoService } from './angular-formio-custom-select-demo.service';

describe('AngularFormioCustomSelectDemoService', () => {
  let service: AngularFormioCustomSelectDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFormioCustomSelectDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
