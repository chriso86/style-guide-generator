import {isNullOrUndefined} from 'util';
import {MatTooltipDefaultOptions} from '@angular/material/tooltip';

export const StringHelper = {
  hasValue: (value: any, emptyStringIsFalsy: boolean = true) => {
    if (emptyStringIsFalsy) {
      return !isNullOrUndefined(value) && value !== '';
    }

    return !isNullOrUndefined(value) && (typeof value === 'string');
  },
  generateVariableFromName(name: string): string {
    return name.toLowerCase().replace(' ', '-');
  }
};

export const NumberHelper = {
  hasValue: (value: any, zeroIsFalsy: boolean = true) => {
    if (zeroIsFalsy) {
      return !isNullOrUndefined(value) && value;
    }

    return !isNullOrUndefined(value) && !isNaN(value);
  }
};

export const BooleanHelper = {
  hasValue: (value: any, nullUndefinedIsFalsy: boolean = true) => {
    if (nullUndefinedIsFalsy) {
      return !!value;
    }

    return (typeof value === 'boolean') && value && !isNullOrUndefined(value);
  }
};

export const ObjectHelper = {
  hasValue: (value: any) => {
    return !isNullOrUndefined(value);
  }
};

export const confirmationTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000
};
