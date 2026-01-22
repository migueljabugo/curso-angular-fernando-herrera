import { FormGroup } from "@angular/forms";

export class FormUtils {

  static isValidField(myForm: FormGroup, fieldName: string): boolean | null {
    return (myForm.controls[fieldName].errors)
        && (myForm.controls[fieldName].touched);
  }

  static
  getFieldError(myForm: FormGroup, fieldName: string): string | null {
    if (!myForm.controls[fieldName]) return null;

    const errors = myForm.controls[fieldName].errors ?? {};

    for (const errorName of Object.keys(errors)) {

      switch (errorName) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;

        case 'maxlength':
          return `Máximo ${errors['maxlength'].requiredLength} caracteres`;

        case 'min':
          return `Mínimo ${errors['min'].min} caracteres`;

      }
    }
    return null;
  }

}
