import { isField } from './type-guards';

export const getFormData = <FormData>(formData: any): FormData => Object
  .entries(formData)
  .reduce((acc: any, [key, value]) => {
    if (isField(value)) {
      acc[key] = value.value;
    } else {
      acc[key] = getFormData(value);
    }
    return acc;
  }, {});
