import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  productName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  price: {
    value: '',
    error: '',
    required: true,
    validate: 'number',
    minLength: 1,
    maxLength: 10
  },
  discount: {
    value: '',
    error: '',
    validate: 'number',
    minLength: 1,
    maxLength: 2
  },
  category: {
    value: '',
    error: '',
    validate: 'select'
  },
  rating: {
    value: '',
    error: '',
    validate: 'select'
  },
  date: {
    value: '',
    error: ''
  },
  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15
  }
}
