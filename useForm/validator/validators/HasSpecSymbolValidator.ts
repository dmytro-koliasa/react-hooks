import { Validator } from './Validator';
import { ValidatorType } from '../types';

interface HasSpecSymbolValidatorOptions {
  message?: string;
}

export class HasSpecSymbolValidator implements Validator {
  readonly _validator: true;
  message: string;
  type: ValidatorType.HAS_SPEC_SYMBOL;

  constructor(options?: HasSpecSymbolValidatorOptions) {
    this.message = options?.message || 'Value should contain at least one special symbol';
  }

  validate(fieldValue: string): string {
    if (/[\W_]+/.test(fieldValue)) return '';
    return this.message;
  }
}
