import { Validator } from './Validator';
import { ValidatorType } from '../types';

interface RegexValidatorOptions {
  message?: string;
  value: RegExp;
}

export class RegexValidator implements Validator {
  _validator: true = true;
  message: string;
  value: RegExp;
  type: ValidatorType.REGEXP;

  constructor({ message, value }:RegexValidatorOptions) {
    this.value = value;
    this.message = message || 'Value doesn`t match with regex';
  }

  validate(fieldValue: string) {
    if (!this.value.test(fieldValue)) return this.message;
    return '';
  }
}
