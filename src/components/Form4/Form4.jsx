import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import { object, string, number } from 'yup'
import InputMask from 'react-input-mask';
import FormButton from '../FormButton/FormButton'
import './Form4.scss'
import Input from '../customs/Input'
import FormTitle from '../FormTitle/FormTitle'

export default function Form4({ nextStep, prevStep, data }) {

  const initialValues = {
    name: data?.name || '',
    phone: data?.phone || '',
    email: data?.email || ''
  }

  const validationSchema = object({
    name: string()
      .min(4)
      .max(15)
      .required()
      .transform(value => value.trim())
      .matches(/^[a-zA-Z\s]+$/, 'Only letters and spaces are allowed'),
    phone: string().required(),
    email: string()
      .required("Email is required")
      .transform(value => value.trim())
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'),
  });


  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={nextStep}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues} >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

      }) => (
        <Form className='Form4'>

          <FormTitle prevStep={prevStep} editable={true} />

          <div className='quote-form'>
            <Input name='name' value={values.name} placeholder='Enter Full Name' label='Name' handleChange={handleChange} error={errors?.name} />
            <Input
              name="phone"
              value={values.phone}
              placeholder="Enter Your Number"
              label="Phone Number"
              handleChange={handleChange}
              error={errors?.phone}
              mask="(999) 999-9999"
            />

            <Input className="last" name='email' value={values.email} placeholder='example@domain.com' label='Email' handleChange={handleChange} error={errors?.email} />
          </div>
          <FormButton>Get Quote</FormButton>
        </Form>
      )}
    </Formik >
  )
}