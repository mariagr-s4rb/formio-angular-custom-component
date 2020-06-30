import { Injector } from '@angular/core';
import { FormioCustomComponentInfo, registerCustomFormioComponent } from 'angular-formio';
import { CustomComponentsComponent } from './custom-components.component';

export function minimalEditForm() {
    return {
      components: [
        { key: 'type', type: 'hidden' },
        {
          weight: 0,
          type: 'textfield',
          input: true,
          key: 'label',
          label: 'Label',
          placeholder: 'Label',
          validate: {
            required: true,
          },
        },
        {
          weight: 10,
          type: 'textfield',
          input: true,
          key: 'key',
          label: 'Field Code',
          placeholder: 'Field Code',
          tooltip: 'The code/key/ID/name of the field.',
          validate: {
            required: true,
            maxLength: 128,
            pattern: '[A-Za-z]\\w*',
            patternMessage:
              'The property name must only contain alphanumeric characters, \n underscores and should only be started by any letter character.',
          },
        },
        {
          weight: 20,
          type: 'textfield',
          input: true,
          value: 'url',
          key: 'customOptions.url',
          label: 'Url to search',
          placeholder: 'Url to search',
          validate: {
            required: true,
          },
        },
      ],
    };
  }

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
    type: 'selectTypeahead',
    selector: 'select-typeahead',
    title: 'Custom select',
    group: 'basic',
    icon: 'fa fa-th-list',
    editForm: minimalEditForm
};

export function registerSelectComponent(injector: Injector) {
    registerCustomFormioComponent(COMPONENT_OPTIONS, CustomComponentsComponent, injector);
}