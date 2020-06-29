import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFormioCustomSelectDemoComponent } from './angular-formio-custom-select-demo.component';

describe('AngularFormioCustomSelectDemoComponent', () => {
  let component: AngularFormioCustomSelectDemoComponent;
  let fixture: ComponentFixture<AngularFormioCustomSelectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFormioCustomSelectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFormioCustomSelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
