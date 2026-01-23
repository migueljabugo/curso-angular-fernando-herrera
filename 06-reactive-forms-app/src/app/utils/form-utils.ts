import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {

  private static getTextError(errors: ValidationErrors) {
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

        case 'email':
          return `El valor no tiene formato de correo electrónico`;
      }
    }

    return null;
  }


  static isValidField(myForm: FormGroup, fieldName: string): boolean | null {
    return (myForm.controls[fieldName].errors)
        && (myForm.controls[fieldName].touched);
  }

  static getFieldError(myForm: FormGroup, fieldName: string): string | null {
    if (!myForm.controls[fieldName]) return null;

    const errors = myForm.controls[fieldName].errors ?? {};

    return this.getTextError(errors);
  }


  static isValidFieldInArray(formArray: FormArray, index: number){
    return formArray.controls[index].errors
        && formArray.controls[index].touched
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextError(errors);
  }

}
