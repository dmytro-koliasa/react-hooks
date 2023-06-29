import { Validator } from './Validator';
import { ValidatorType } from '../types';

interface HasCapitalizeValidatorOptions {
  message?: string;
}

export class HasCapitalizeValidator implements Validator {
  readonly _validator: true;
  message: string;
  type: ValidatorType.HAS_CAPITALIZE;

  constructor(options?: HasCapitalizeValidatorOptions) {
    this.message = options?.message || 'Value should contain at least one uppercase letter';
  }

  validate(fieldValue: string): string {
    if (/[A-Z]+/.test(fieldValue)) return '';
    return this.message;
  }
}
