import { Validator } from './Validator';
import { ValidatorType } from '../types';

interface HasNumberValidatorOptions {
  message?: string;
}

export class HasNumberValidator implements Validator {
  readonly _validator: true;
  message: string;
  type: ValidatorType.HAS_NUMBER;

  constructor(options?: HasNumberValidatorOptions) {
    this.message = options?.message || 'Value should contain at least one number';
  }

  validate(fieldValue: string): string {
    if (/\d/.test(fieldValue)) return '';
    return this.message;
  }
}
