import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not a valid format email')
    .required('Email is required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
})

export const initialValues = {
  email: '',
  password: '',
}
