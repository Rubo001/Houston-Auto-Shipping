import FormButton from '../FormButton/FormButton'
import { object, string, number } from 'yup'
import './Form2.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Input from '../customs/Input'
import FormTitle from '../FormTitle/FormTitle'
export default function Form2({ prevStep, nextStep, data }) {

  const optionValues = [
    {
      id: 1,
      name: 'As Soon as Possible'
    },
    {
      id: 2,
      name: 'Within 1 Week'
    },
    {
      id: 3,
      name: 'Within 2 Weeks'
    },
    {
      id: 4,
      name: 'Within 30 Days'
    },
    {
      id: 5,
      name: 'More Than 30 days'
    },
  ]

  const initialValues = {
    year: data.year,
    make: data.make,
    model: data.model,
    time: data.time,
    shipping: data.shipping,
    operable: data.operable,
  }

  const validationSchema = object({
    year: number().required(),
    make: number().required(),
    model: string()
      .min(2, "at least 2 characters")
      .max(10, "maximum 10 characters")
      .required()
      .transform(value => value.trim())
      .matches(/^[a-zA-Z0-9\s]+$/, 'symbols not allowed'),
    time: string().notOneOf(["select"], "Please select a time").required(),
    operable: string().required(),
    shipping: string().required(),
  });

  return (

    <Formik
      onSubmit={nextStep}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

      }) => (
        <Form className='Form2'>
          <FormTitle editable={true} prevStep={prevStep} />
          <div className="vehicle">
            <label htmlFor="year">Vehicle</label>
            <div className="vehicle__inputs">
              <Input value={values.year} name='year' placeholder='Year' handleChange={handleChange} error={errors?.year} type='number' />
              <Input value={values.make} name='make' placeholder='Make' handleChange={handleChange} error={errors?.make} type='number' />
              <Input value={values.model} name='model' placeholder='Model' handleChange={handleChange} error={errors?.model} />
            </div>
          </div>

          <div className="Form2__bottom">
            <div className="time">
              <label htmlFor="time">
                Time
                <Field as="select" name="time" id="time" defaultValue="select" required>
                  <option value="select" disabled>Select Time</option>
                  {
                    optionValues.map(elem => {
                      return <option key={elem.id} value={elem.name}>{elem.name}</option>
                    })
                  }
                </Field>
                <ErrorMessage name="time" component="div" className="error-message" />
              </label>
            </div>

            <div className="shipping">
              <label htmlFor="shipping">Shipping Method?</label>
              <div className="shipping__radios">
                <label htmlFor="open">Open
                  <Field type="radio" id="open" name="shipping" value="open" />
                </label>
                <label htmlFor="enclosed">Enclosed
                  <Field type="radio" id="enclosed" name="shipping" value="enclosed" />
                </label>
              </div>
              <ErrorMessage name="shipping" component="div" className="error-message" />
            </div>


            <div className="operable">
              <label htmlFor="operable">Is it Operable?</label>
              <div className="operable__radios">
                <label htmlFor="yes"> Yes
                  <Field type="radio" id="yes" name="operable" value="yes" />
                </label>
                <label htmlFor="no"> No
                  <Field type="radio" id="no" name="operable" value="no" />
                </label>
              </div>
              <ErrorMessage name="operable" component="div" className="error-message" />
            </div>

          </div>

          <FormButton>Continue</FormButton>

        </Form>
      )}
    </Formik>
  )
}
