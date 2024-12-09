import {RegisterOptions} from 'react-hook-form'

export const useValidationOptions =
  () =>
  (required: boolean, minLength?: boolean | number, maxLength?: boolean | number, extraValidators = {}): any => {
    const validations: RegisterOptions<any> = extraValidators

    if (required) {
      validations.required = 'Please fill out the form'
    }

    if (typeof minLength === 'number') {
      validations.minLength = {
        value: minLength,
        message: `${'Minimum'} ${minLength} ${'Characters required'} `,
      }
    }

    if (typeof maxLength === 'number') {
      validations.maxLength = {
        value: maxLength,
        message: `${'Minimum'} ${maxLength}  ${'Characters allowed'}`,
      }
    }

    return validations
  }
