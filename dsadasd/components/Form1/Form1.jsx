import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import { object, string } from 'yup'
import FormButton from '../FormButton/FormButton'
import './Form1.scss'
import Input from '../customs/Input'
import FormTitle from '../FormTitle/FormTitle'

export default function Form1({ nextStep, prevStep, values }) {

  const initialValues = {
    from: values?.from || '',
    to: values?.to || ''
  }

  const validationSchema = object({
    from: string()
      .min(4)
      .max(15)
      .required()
      .transform(value => value.trim())
      .matches(/^[a-zA-Z\s]+$/, 'Only letters and spaces are allowed'),
    to: string()
      .min(4)
      .max(15)
      .required()
      .transform(value => value.trim())
      .matches(/^[a-zA-Z\s]+$/, 'Only letters and spaces are allowed'),
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
        <Form className='Form1'>

          <FormTitle prevstep={prevStep} editable={false} />

          <div className='quote-form'>
            <Input name='from' value={values.from} placeholder='City,State or ZIP' label='From' handleChange={handleChange} error={errors?.from} />
            <Input name='to' value={values.to} placeholder='City,State or ZIP' label='To' handleChange={handleChange} error={errors?.to} />
            <FormButton>Continue</FormButton>
          </div>
        </Form>
      )}
    </Formik >
  )
}



