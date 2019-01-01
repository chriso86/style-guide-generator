import {isNullOrUndefined} from 'util';

export const StringHelper = {
  hasValue: (value: any, emptyStringIsFalsy: boolean = true) => {
    if (emptyStringIsFalsy) {
      return !isNullOrUndefined(value) && value !== '';
    }

    return !isNullOrUndefined(value) && (typeof value === 'string');
  },
  generateVariableFromName(name: string): string {
    const firstLetter = name.charAt(0).toLowerCase();
    const remaining = name.substr(1).replace(' ', '');

    return firstLetter + remaining;
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
