import { ValidatorType } from '../types';
import { Validator } from './Validator';

interface MinValueValidatorOptions {
  message?: string;
  value: number;
}

export class MinValueValidator implements Validator {
  readonly _validator: true = true;
  type: ValidatorType = ValidatorType.IS_REQUIRED;
  message: string;
  value: number;

  constructor(options: MinValueValidatorOptions) {
    this.message = options.message || 'Field is required!';
    this.value = options.value;
  }

  validate(fieldValue: any): string {
    if (Number(fieldValue) < this.value) return this.message;
    return '';
  }
}
