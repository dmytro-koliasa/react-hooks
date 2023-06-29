import { FormField } from '../FormField';

export const isField = (object: any): object is FormField => '_field' in object;
