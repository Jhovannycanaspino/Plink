import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidator {

  static minimum(min: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min)) {
        return { 'range': true };
      }
      return null;
    };
  }
}