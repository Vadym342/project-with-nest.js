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
  brand: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  imageKey: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    helperText: 'Custom error message'
  },
  model: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  description: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 150,
    helperText: 'Custom error message'
  },
  feature: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  producer: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
}
